import React from 'react'
import {
  useState
} from "react"
import Form from 'react-bootstrap/Form'

import GoogleButton from "../components/GoogleButton"
import Navbar from '../components/Navbar'

import '../css/signin.css'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(event) {
    event.preventDefault()

    const response = await fetch("http://localhost:5000/Signin", {
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

    if (data.status === "ok") {
      alert('Sign in successful')
      window.location.href = "Student-homepage"
    } else {
      alert('Please check your username and password')
    }
  }


  return (
<div className="signin271-container">

<div className="signin271-signin271">
  <div className="signin271-signinform550">
    <img
      alt="Rectangle8433"
      src="/images/rectangle8433-uysa.svg"
      className="signin271-image"
    />
    <Form onSubmit={handleRegister}>
      <span className="signin271-text01">Sign in</span>
      <span className="signin271-text02">Email :</span>
      <span className="signin271-text03">Password :</span>


      <Form.Control style={{width:"526px"}} className="signin271-image1" type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>

      <Form.Control style={{width:"526px"}} className="signin271-image2" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>

      <button className="signin271-button543" variant="primary" type="submit">
        <span className="signin271-text">Sign in</span>
      </button>
    </Form>

  </div>

  {/* <div className="signin271-navbar1721">
    <span className="signin271-text05">SMR</span>
    <span className="signin271-text06">Features</span>
    <span className="signin271-text07">About us</span>
    <span className="signin271-text08">Team</span>
    <span className="signin271-text09">Contact us</span>
  </div> */}

  <Navbar />
  
  <img
    alt="Ellipse3546"
    src="/images/ellipse3546-y56a.svg"
    className="signin271-svg"
  />
  <img
    alt="Ellipse23110"
    src="/images/ellipse23110-bf1v.svg"
    className="signin271-svg1"
  />
  <img
    alt="Ellipse53111"
    src="/images/ellipse53111-m86.svg"
    className="signin271-svg2"
  />
</div>

  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <GoogleButton />
      </div>
    </div>
  </div>
</div>
  )
}

export default Signin