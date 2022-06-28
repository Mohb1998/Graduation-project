const express = require("express");
var app = express();

const twilio = require("twilio")

const formidable = require("formidable")
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

require('dotenv').config();

app.use(cors())

const accountSid = process.env.SID_TWILIO;
const authToken = process.env.AUTH_TWILIO;

const client = new twilio(accountSid, authToken)

app.use(express.json())

var fs = require('fs');
const path = require('path')


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
  phone: {
    type: String,
    required: true
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
const User = mongoose.model("User", userSchema)

const studentSigninSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
}, {
  collection: 'Student-signin'
})
const Studentsignin = mongoose.model("Studentsignin", studentSigninSchema)

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
        password2,
        photo
      } = fields

      if (!name || !email || !password) {
        return res.json({
          status:"Emptyfields"
        })
      }

      if (password != password2)
      {
        return res.json({
          status: "Passwords missmatch"
        })
      }

    }

    if (file.photo) {
      if (file.photo.size > 4000000) {
        return res.json({
          status: "Image is too large"
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
        password2
      } = fields

      if (!name || !email || !password) {
        return res.json({
          status: "Emptyfields"
        })
      }

      if (password != password2)
      {
        return res.json({
          status: "Passwords missmatch"
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

  const teacher = await Teacher.findOne({
    email: req.body.email,
    password: req.body.password,
    code : req.body.code
  })

   if(teacher){
    return res.json({
      status: 'ok',
      teacher : true
    })
  }

   else {
    return res.json({
      status: 'error'
    })
  }

})

const signinData = (req, res) => {
  console.log("Wasal hena")
  const formsignin = new formidable.IncomingForm({
    multiples: true
  });

  formsignin.parse(req, (err, fields, file) => {

    console.log("W delwa2ti hena")
    console.log(fields)
    if (fields) {
      const {
        email,
        password,
        photo,
      } = fields

      if (!email || !password) {
        return res.json({
          status:"Emptyfields"
        })
      }

    }

    if (file.photo) {
      console.log("W a5iran hena")
      if (file.photo.size > 4000000) {
        return res.json({
          status: "Image is too large"
        })
      }

      const studentsignin = new Studentsignin(fields)
      studentsignin.photo.data = fs.readFileSync(file.photo.filepath)
      studentsignin.photo.contentType = file.photo.type

      studentsignin.save((err, studentsignin) => {
        if (studentsignin) {
          return res.json({
            status: 'ok',
          })
        } else {
          return res.json({
            status: 'error',
          })
        }

      })
    }

  })
}
app.post("/SigninStudent", signinData)

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

app.get('/Forgotcredentials', (req, res) => {

  //Student
  let userEmail;
  let userPassword;

  User.find({phone: req.query.recipient}, function(err, users){

    if(err)
    {
      console.log(err)
    }
    else{
      users.forEach(function(user){
          userEmail = user.email;
          userPassword = user.password; 
          console.log(userEmail) 
          console.log(userPassword)      
      })

      client.messages.create({
        body: "Hello Sorry to hear you faced some trouble, here is you email: "+userEmail+" and this is your password: "+userPassword,
        to: "+" + req.query.recipient,  // Text this number
        from: '+19783545760' // From a valid Twilio number
    }).then((message) => console.log(message.body));
    }

  })


  //Teacher
  let userEmail1;
  let userPassword1;

  Teacher.find({phone: req.query.recipient}, function(err, users){

    if(err)
    {
      console.log(err)
    }
    else{
      users.forEach(function(user){
          userEmail1 = user.email;
          userPassword1 = user.password; 
          console.log(userEmail1) 
          console.log(userPassword1)      
      })

      client.messages.create({
        body: "Hello Sorry to hear you faced some trouble, here is you email: "+userEmail+" and this is your password: "+userPassword,
        to: "+" + req.query.recipient,  // Text this number
        from: '+19783545760' // From a valid Twilio number
    }).then((message) => console.log(message.body));
    }

  })

})

if(process.env.NODE_ENV === "production")
{
  app.use(express.static(path.join(__dirname, "/client/build")))

  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
}else {
  app.get('/', (req, res) => {
    res.send("API Running")
  })
}

/* This is a port that is used to listen to the server. */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log("Server running on " + PORT)
})