const express = require("express");
const app = express();

const formidable = require("formidable")

const cors = require("cors");

const mongoose = require("mongoose");
// const findOrCreate = require("mongoose-findorcreate");

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
// userSchema.plugin(findOrCreate)
const User = mongoose.model("User", userSchema)


const teacherSchema = new mongoose.Schema({
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
}, {
  collection: 'Teacher'
})
// userSchema.plugin(findOrCreate)
const Teacher = mongoose.model("Teacher", teacherSchema)


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
    }
  })
}
app.post("/Signup", userData)


const teacherData = (req, res) => {
  const form = new formidable.IncomingForm({
    multiples: true
  });

  form.parse(req, (err, fields, file) => {
    if (fields) {
      const {
        name,
        email,
        password,
      } = fields

      if (!name || !email || !password) {
        return res.status(400).json({
          error: "Fill all the fields"
        })
      }
    }

      const teacher = new Teacher(fields)
      teacher.save((err, teacher) => {
        if (teacher) {
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
    
  })
}
app.post("/SignupTeacher", teacherData)


app.post("/Signin", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  const teacher = await Teacher.findOne({
    email: req.body.email,
    password: req.body.password
  })

  console.log(teacher)

  if (user) {
    return res.json({
      status: 'ok',
      student : true
    })
  }

  else if(teacher){
    return res.json({
      status: 'oki',
      teacher : true
    })
  }

   else {
    return res.json({
      status: 'error'
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

if(process.env.NODE_ENV === "production")
{
  app.use(express.static("../build"))
}

/* This is a port that is used to listen to the server. */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on " + PORT)
})