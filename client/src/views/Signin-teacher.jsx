import React from 'react'
import {useState} from "react"
import Form from 'react-bootstrap/Form'
import {Link} from "react-router-dom"


// import GoogleButton from "../components/GoogleButton"
import Navbar2 from '../components/Navbar2'
import '../css/signin.css'

function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')


  async function handleRegister(event) {
    event.preventDefault()

    const response = await fetch("/Signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        code
      }),
    })

    const data = await response.json()

    if(data.status === "ok")
    {
      alert('Sign in successful')
      window.location.href = "/Teacherpage"
    }
    else {
      alert('Please check your username and password')
    }

  }

  return (
    <div className="signin-container">

      <div className="signin-signin">
      <Navbar2 />

        <div className="signin-signinform">

          <img
            alt="Rectangle8433"
            src="/images/3ecd61a1-8cbe-419f-a98b-d827818d89b3-h3n.svg"
            className="signin-rectangle8"
          />


          <Form onSubmit={handleRegister}>

              <span className="signin-text2">Sign in</span>
              <span className="signin-text3">Email :</span>
              <span className="signin-text4">Password :</span>
              <span className="signin-text5">Code :</span>

              <Form.Control style={{width:"526px"}} className="signin-rectangle9" type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>

              <Form.Control style={{width:"526px"}} className="signin-rectangle10" type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>

              <Form.Control style={{width:"526px"}} className="signin-rectangle11" type="string" placeholder="Code" onChange={(e)=> setCode(e.target.value)}/>

              <button className="signin-button" type="submit">
                <span className="signin-text">Sign in</span>
              </button>

              <Link to ="/Forgotcredentials">
                <button className="signin-button1">
                  <span className="signin-text1">Forgot credentials</span>
                </button>
              </Link>


          </Form>
          


        </div>

          <img
            alt="Ellipse53111"
            src="/images/534edcf6-fab2-4c55-a54c-77521809983a-l74r.svg"
            className="signin-svg2"
          />
      </div>
    </div>
  )
}

export default Signin