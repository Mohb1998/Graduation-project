import React from "react";
import {useState} from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleButton from "../components/GoogleButton"


function Signup()
{

    const [values, setValues] = useState({
      name:'',
      email:'',
      password:'',
      photo:'',
      error:'',
      success:false,
      formData: new FormData()
    })

    const {name,formData,photo,email,password,error,success} = values

    const onHandleChange = name => event =>{
      const value=(name==='photo') ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      console.log(value)
      setValues({...values,[name]:value})
    }

    const api = (data) => {
      return fetch("http://localhost:5000/Signup",{
        method: "POST",
        body: data
      }).then(res => res.json()).catch(err => console.log(err))
    }

  //     if(data.status === "ok")
  //     {
  //       alert('Sign up successful')
  //       //window.location.href = "ImageUpload"
  //     }
  //     else
  //     {
  //       alert('Please check your username and password')
  //     }

    return(
      <div class="signinup-container">
      <Navbar />
  
      <div class="Signup-form mt-5 featuresContainer1">
          <h1>Sign up</h1>

          <Form onSubmit={(e) => e.preventDefault()}> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" onChange={onHandleChange('name')}/>

                  {/* <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your last name"/> */}

                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={onHandleChange('email')}/>
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={onHandleChange('password')}/>
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Student" />
                  <Form.Check type="checkbox" label="Instructor" />
              </Form.Group> */}

              <Form.Label>Image upload</Form.Label>
              <Form.Control type="file" onChange={onHandleChange('photo')}/>
              
              <Button onClick={() => api(formData).then(res => console.log("User saved"))}>
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