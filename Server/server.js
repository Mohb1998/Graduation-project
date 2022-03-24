const express = require("express");
const app =express();

const cors = require("cors");

const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const multer = require("multer");
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require("gridfs-stream");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const md5 = require("md5");

require('dotenv').config();

app.use(cors())
app.use(express.json())


var fs = require('fs');
var path = require('path');
const crypto = require("crypto")

// mongodb://localhost:27017   
mongoose.connect("mongodb+srv://admin-mohb:23121998@cluster0.tr2mg.mongodb.net/Users-database", {useNewUrlParser: true})

const mongoURL = "mongodb+srv://admin-mohb:23121998@cluster0.tr2mg.mongodb.net/Users-database"
const conn = mongoose.createConnection(mongoURL)


const userSchema = new mongoose.Schema
({
    email: {type : String, required : true, unique : true},
    password: {type:String, required:true},
    image: {type: Buffer, contentType: String}

}, {collection: 'user'})
userSchema.plugin(findOrCreate)
const User = mongoose.model("User", userSchema)


let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})

const storage = new GridFsStorage({
    url: mongoURL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });


/* A function that is called when the user sends a request to the server. */
app.post("/Signup", upload.single('file'), async(req, res) => {

    try{
        const newUser = new User({
            email : req.body.email,
            password : md5(req.body.password),
            image : req.body.file,
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

/* A function that is called when the user sends a request to the server. */
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