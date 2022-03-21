const express = require("express")
const app =express()
const cors = require("cors")
const mongoose = require("mongoose")
const findOrCreate = require("mongoose-findorcreate");

const multer = require("multer");
const ImageModel = require("./image.model");

const md5 = require("md5");
const e = require("express");

require('dotenv').config();

app.use(cors())
app.use(express.json())

// mongodb://localhost:27017   
mongoose.connect("mongodb+srv://admin-mohb:23121998@cluster0.tr2mg.mongodb.net/Users-database", {useNewUrlParser: true})

const userSchema = new mongoose.Schema
({
    email: {type : String, required : true, unique : true},
    password: {type:String, required:true},
}, {collection: 'user'})

userSchema.plugin(findOrCreate)

const User = mongoose.model("User", userSchema)


const Storage = multer.diskStorage({
    destination: "uploads",
    filename : (req, image, cb) =>{
        cb(null, image.originalname)
    },
});

const upload = multer({
    storage: Storage
}).single('studentImage')

app.post("/Signup", async(req, res) => {

    console.log(req.body);


    try{
        const newUser = new User({
            email : req.body.email,
            password : md5(req.body.password),
        })

        upload(req, res, (err) => {
            if(err)
            {
                console.log(err)
            }
            else
            {
                const newImage = new ImageModel({
                    name : req.body.fname,
                    image: {
                        data : req.file.filename,
                        contentType: "image/jpg"
                    }
                })

                newImage.save()

            }
        })

        console.log(newUser)

        var n = User(newUser)
        await n.save()

        res.json({status : 'ok'})
        

    }catch(err){
        console.log(err)
        res.json({status : 'error', error : err})
    }
})

app.post("/Signin", async(req, res) => {

        const user = await User.findOne({
            email : req.body.email, 
            password : md5(req.body.password)
        })

        if(user)
        {
            return res.json({status: 'ok', user: true})
        }
        else
        {
            return res.json({status: 'error', user: false})
        }
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log("Server running on " + PORT)
})
