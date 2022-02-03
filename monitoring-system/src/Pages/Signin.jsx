import React from "react";
import {useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signin()
{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(event)
  {
    event.preventDefault()

    const response = await fetch("http://localhost:5000/Signin", {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data.status === "ok")
    {
      alert('Sign in successful')
      window.location.href = "Studenthomepage"
    }
    else
    {
      alert('Please check your username and password')
    }
  }

    return(
      <div class="signinup-container">
    <Navbar />

    <div class="Signup-form mt-5 featuresContainer1">
        <h1>Sign in</h1>

        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Signin
            </Button>
        </Form>

        {/*<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                            <i class="fab fa-google"></i>
                            Sign In with Google
                        </a>
                        <a class="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
                            <i class="fab fa-facebook"></i>
                            Sign In with Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
    </div>

    <Footer />
</div>
    )
}

export default Signin;