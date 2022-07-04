import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'

import '../css/signup-student.css'

import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'


function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    photo: '',
    error: '',
    success: false,
    formData: new FormData()
  })

  const {
    name,
    formData,
    photo,
    email,
    phone,
    password,
    password2,
    error,
    success
  } = values

/* A function that is used to handle the change of the input fields. */
  const onHandleChange = name => event => {
    const value = (name === 'photo') ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({
      ...values,
      [name]: value
    })
  }

  async function api(data){

    const response = await fetch("/Signup", {
      method: "POST",
      body: data,
      multiples: true
    })

    const resp = await response.json()
    console.log(resp)
    
    if(resp.status === "Emptyfields")
    {
      alert("You have some empty fields, please fill all fields")
    }
    else if(resp.status === "Image is too large")
    {
      alert("Please upload smaller images")
    }
    else if(resp.status === "error")
    {
      alert("Something went wrong on our server please try again later")
    }
    else if(resp.status === "Passwords missmatch")
    {
      alert("The passwords don't match")
    }
    else{
      alert("Signup was successfull")
      window.location.href = "/Signinstudent"
    }
  }

  return (
    <div className="signup-student-container">

      <div className="signup-student-signup-student">

        <Navbar2 />
        {/* <Footer2 /> */}
        <img
          alt="Ellipse51717"
          src="/images/e797d46b-00ba-4a7f-9132-52a1cb4c075f-318a.svg"
          className="signup-student-svg"
        />
        <img
          alt="Ellipse61718"
          src="/images/c4dd65be-0ec0-4c3d-8284-1117cdc34630-zp19.svg"
          className="signup-student-svg1"
        />


        <div className="signup-student-signupform">

          <img
            src="/images/7326f23e-7177-45aa-b1e0-69dcc0ed7c62-12yn.svg"
            alt="Rectangle8576"
            className="signup-student-rectangle8"
          />
          <img
            src="/images/Seif4.jpeg"
            alt="Rectangle2622010"
            className="signup-student-rectangle26"
          />
          <img
            src="/images/Seif2.jpeg"
            alt="Rectangle252209"
            className="signup-student-rectangle25"
          />
          <img
            src="/images/Seif1.jpeg"
            alt="Rectangle242208"
            className="signup-student-rectangle24"
          />
                    <img
            src="/images/Seif3.jpeg"
            alt="Rectangle232207"
            className="signup-student-rectangle23"
          />
          <img
            src="/images/Seif5.jpeg"
            alt="Rectangle232206"
            className="signup-student-rectangle231"
          />

          <span className="signup-student-text1">Sign up</span>
          <span className="signup-student-text2">Name :</span>
          <span className="signup-student-text3">Phone :</span>
          <span className="signup-student-text4">Password :</span>
          <span className="signup-student-text5">Confirm password :</span>
          <span className="signup-student-text6">Email :</span>
          <span className="signup-student-text8">
            Please make sure to upload images showing your profile like in these
            examples
          </span>
          <span className="signup-student-text7">Image upload :</span>

        <Form>
          <Form.Control className="signup-student-rectangle9" type="text" placeholder="Enter your first name" onChange={onHandleChange('name')}/>

          <Form.Control className="signup-student-rectangle10" type="email" placeholder="Enter email" onChange={onHandleChange('email')}/>

          <Form.Control className="signup-student-rectangle27" type="numbers" placeholder="Enter phone" onChange={onHandleChange('phone')}/>

          <Form.Control className="signup-student-rectangle11" type="password" placeholder="Password" onChange={onHandleChange('password')}/>

          <Form.Control className="signup-student-rectangle12" type="password" placeholder="Confirm password" onChange={onHandleChange('password2')}/>

          <Form.Control className="signup-student-rectangle13" type="file" multiple onChange={onHandleChange('photo')}/>
          
        </Form>

        <button className="signup-student-button" onClick={() => api(formData)}>
          <span className="signup-student-text">Sign up</span>
        </button>

        </div>
        
      </div>

    </div>
  )
}

export default Signup