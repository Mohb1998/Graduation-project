const express = require("express")
const app =express()
const cors = require("cors")
const mongoose = require("mongoose")
const findOrCreate = require("mongoose-findorcreate");

const md5 = require("md5")

require('dotenv').config();

//Hello

// const passport = require('passport')
// const session = require("express-session");

// app.use(passport.initialize());
// app.use(passport.session());

// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// app.use(session({
//     secret: "Our secret.",
//     resave: false,
//     saveUninitialized: false
// }));

// passport.serializeUser(function(user, done){
//     done(null,user)
// });
// passport.deserializeUser(function(user, done){
//     done(null,user)
// });

app.use(cors())
app.use(express.json())
mongodb://localhost:27017
mongoose.connect("mongodb+srv://admin-mohb:23121998@cluster0.tr2mg.mongodb.net/Users-database", {useNewUrlParser: true})

const userSchema = new mongoose.Schema
({
    email: {type : String, required : true, unique : true},
    password: {type:String, required:true},
}, {collection: 'user'})

userSchema.plugin(findOrCreate)

const User = mongoose.model("User", userSchema)


app.post("/Signup", async(req, res) => {

    try{
        const newUser = new User({
            email : req.body.email,
            password : md5(req.body.password), 
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


// passport.use(new GoogleStrategy({
//     clientID: "837753743241-cspfn3gqv0gg8jekm42k66i1ca2cl501.apps.googleusercontent.com",
//     clientSecret: "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",
//     callbackURL: "http://localhost:3000/auth/google/monitoringsystem",
//     userProfileURL: "https:www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//     });
//   }
// ));

// app.get("/auth/google",
//     passport.authenticate("google", {scope: ['profile']})
// );

// app.get('/auth/google/monitoringsystem', 
//   passport.authenticate('google', 
//     { 
//         failureRedirect: '/Signin'
        
//     }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/Studenthomepage');
//     console.log("Success")
//   });



const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log("Server running")
})
