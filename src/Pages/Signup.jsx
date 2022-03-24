import React from "react";
import {useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleButton from "../components/GoogleButton"


function Signup()
{
    const [lname, setLname] = useState('')
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState('')

   /**
    * It takes in an event object, and then uses the fetch function to send a POST request to the
    * server. The body of the request is a JSON object containing the user's information. The server
    * then returns a response, which is parsed as a JSON object. If the response is ok, then the user
    * is redirected to the signin page. Otherwise, an error message is displayed
    * @param event - The event that triggered the function.
    */
   
    async function handleRegister(event)
    {
      event.preventDefault()

      const file = new FormData();
      file.append('file', file);

      const response = await fetch("http://localhost:5000/Signup", {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          email,
          password, 
          file,
        }),
      })

      const data = await response.json()
      if(data.status === "ok")
      {
        alert('Sign up successful')
        //window.location.href = "ImageUpload"
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
          <h1>Sign up</h1>

          <Form enctype="multipart/form-data" onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" onChange={(e)=> setFname(e.target.value)}/>

                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" onChange={(e)=> setLname(e.target.value)}/>

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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Student" />
                <Form.Check type="checkbox" label="Instructor" />
            </Form.Group>

            <Form.Label>Image upload</Form.Label>
            <Form.Control type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
            
            <Button variant="primary" type="submit">
                Signup
            </Button>                 
        </Form>
  
        <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <GoogleButton />
              </div>
            </div>
        </div>

      </div>
  
      <Footer />
  </div>
        
    )
}

export default Signup;