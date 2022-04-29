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

require('dotenv').config();

app.use(cors())
app.use(express.json())

var fs = require('fs');


// mongodb://localhost:27017   
//Connecting to the online database to store and retrieve data
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true
  })
  .then(res => {
    console.log("Database connected")
  }).catch(err => console.log("Unable to connect"))


/* This is creating a schema for the user. */
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
  const form = new formidable.IncomingForm({
    multiples: true
  });

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


/* This is a post request that is used to sign in the user. It takes in the email and password from the
request body and checks if the user exists in the database. If the user exists, it returns a status
of ok and a user of true. If the user doesn't exist, it returns a status of error and a user of
false. */
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

//This will be the function used to retrieve the data from the database and access the images
//We should use the email as it is a unique atribute and can't be a duplicate
// User.find({email:"mohebkhaled16@yahoo.com"}, (err, data) => {
//   console.log("Searching database ...")
//   if(err)
//   {
//     console.log("not found")
//     console.log(err)
//   }
//   else{
//     console.log("found")
//     console.log(data)
//   }
// })

/* This is a port that is used to listen to the server. */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on " + PORT)
})