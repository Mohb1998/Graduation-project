import React from 'react'
import {
  useState
} from "react"
import Form from 'react-bootstrap/Form'
import  { useEffect, useRef } from "react";
import {Link} from "react-router-dom"



// import GoogleButton from "../components/GoogleButton"
import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'

import '../css/Signin-student.css'

function Signinstudent () {

  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(event) {
    event.preventDefault()

    const response = await fetch("/SigninStudent", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data.status === "ok")
    {
      alert('Sign in successful')
      window.location.href = "/StudentHomePage"
    }
    else {
      alert('Please check your username and password')
    }

  }

  // async function handleRegister(data){
  //   const response = await fetch("/SigninStudent", {
  //     method: "POST",
  //     body: data,
  //     multiples: true
  //   })

  //   const resp = await response.json()
  //   console.log(resp)
    
  //   if(resp.status === "Emptyfields")
  //   {
  //     alert("You have some empty fields, please fill all fields")
  //   }
  //   else if(resp.status === "Image is too large")
  //   {
  //     alert("Please upload smaller images")
  //   }
  //   else if(resp.status === "error")
  //   {
  //     alert("Something went wrong on our server please try again later")
  //   }
  //   else if(resp.status === "ok"){
  //     alert("Signin was successfull")
  //     window.location.href = "/StudentHomePage"
  //   }
  // }
   
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    };
   
    const takePicture = (event) => {
        event.preventDefault()
        const width = 400
        const height = width / (16 / 9)
        let video = videoRef.current
        let photo = photoRef.current

        photo.width = width
        photo.height = height
    
        let ctx = photo.getContext('2d')
        ctx.drawImage(video, 0, 0, width, height)
    }
   
    const clearImage = () => {
      let photo = photoRef.current
      let ctx = photo.getContext('2d')
      ctx.clearRect(0,0,photo.width,photo.height)
    }
   
    useEffect(() => {
      getVideo();
    }, [videoRef]);


    // const [values, setValues] = useState({
    //     email: '',
    //     password: '',
    //     //photo: '',
    //     error: '',
    //     success: false,
    //     formData: new FormData()
    //   })
    
    //   const {
    //     formData,
    //     //photo,
    //     email,
    //     password,
    //     error,
    //     success
    //   } = values
    
      // const onHandleChange = name => event => {
      //   const value = (name === 'photo') ? event.target.files[0] : event.target.value;
      //   formData.set(name, value);
      //   setValues({
      //     ...values,
      //     [name]: value
      //   })
      // }

  return (

    <div className="signinstudent-container">

      <div className="signinstudent-signinstudent">

  <Navbar2 />
  <div className="signinstudent-signinform">
    <img
      src="/images/d89bd745-a0e2-4efb-bfd2-4edf21cd3727-a6g7.svg"
      alt="Rectangle82098"
      className="signinstudent-rectangle8"
    />

    <Form onSubmit={handleRegister}>

    <span className="signinstudent-text1">Sign in</span>
          <span className="signinstudent-text2">Email :</span>
          <span className="signinstudent-text3">Password :</span>

      <Form.Control style={{width:"526px"}} className="signinstudent-rectangle9" type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
      <Form.Control style={{width:"526px"}} className="signinstudent-rectangle10" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>

      <button className="signinstudent-button" type="submit">
          <img src="/images/5600082a-143e-43d6-8ef4-aa97acb9f613-vn96.svg" alt="Rectangle220910" className="signinstudent-rectangle2" />
          <span className="signinstudent-text">Sign in</span>
      </button>

    </Form>


  </div>
  <button className="signinstudent-button1" onClick={takePicture}>
    <span className="signinstudent-text4">Take picture</span>
  </button>

  <button className="signinstudent-button2" onClick={clearImage}>
    <span className="signinstudent-text5">Delete picture</span>
  </button>

  <img
    alt="Ellipse220925"
    src="/images/f0f539a8-4604-45ae-8fd8-112cbeb39e0c-gjel.svg"
    className="signinstudent-svg"
  />
  
  <video ref={videoRef} className="signinstudent-rectangle21"
  />
  <canvas className="container" ref={photoRef}></canvas>
  
  <span className="signinstudent-text6">
    Make sure that you are well centered and have good lighting
  </span>

  <canvas ref={photoRef}className="signinstudent-rectangle22"/>

  <Link to ="/Forgotcredentials">
    <button className="signinstudent-button3">
      <span className="signinstudent-text7">Forgot credentials</span>
    </button>
  </Link>

</div>
</div>
    
  )
}

export default Signinstudent


