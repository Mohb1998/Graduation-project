const express = require("express");
const app = express();


/* A node.js module for parsing form data, especially file uploads. */
const formidable = require("formidable")

const cors = require("cors");

const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const md5 = require("md5");

require('dotenv').config();

app.use(cors())
app.use(express.json())

var fs = require('fs');


// mongodb://localhost:27017   
mongoose.connect("mongodb+srv://admin-mohb:23121998@cluster0.tr2mg.mongodb.net/Users-database", {
    useNewUrlParser: true
  })
  .then(res => {
    console.log("Database connected")
  }).catch(err => console.log("Unable to connect"))


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer,
    contentType: String
  }

}, {
  collection: 'Student'
})
userSchema.plugin(findOrCreate)
const User = mongoose.model("User", userSchema)


/*
 * The function takes in a request and a response object. 
 * It then uses the formidable module to parse the request. 
 * The formidable module parses the request and returns an object with the fields and files. 
 * If the fields exist, it checks if the name, email, password, and photo fields are filled out. 
 * If they are, it creates a new user with the fields and saves it to the database. 
 * If the photo field exists, it reads the file and saves it to the database. 
 * If the fields don't exist, it returns an error
 */
const userData = (req, res) => {
  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, (err, fields, file) => {
    if (fields) {
      const {
        name,
        email,
        password,
        photo
      } = fields

      if (!name || !email || !password) {
        return res.status(400).json({
          error: "Fill all the fields"
        })
      }
    }

    if (file.photo) {
      if (file.photo.size > 4000000) {
        return res.status(400).json({
          error: "Image is too large"
        })
      }

      const user = new User(fields)
      user.photo.data = fs.readFileSync(file.photo.filepath)
      user.photo.contentType = file.photo.type

      user.save((err, user) => {
        if (err) {
          return res.status(400).json({
            erro: "User not saved"
          })
        }
        return res.json(user)

      })
    }
  })
}
app.post("/Signup", userData)


app.post("/Signin", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  if (user) {
    return res.json({
      status: 'ok',
      user: true
    })
  } else {
    return res.json({
      status: 'error',
      user: false
    })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on " + PORT)
})