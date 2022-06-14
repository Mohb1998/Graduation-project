import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'

import '../css/signup-student.css'

import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'


function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
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
    password,
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

  const api = (data) => {
    return fetch("http://localhost:5000/Signup", {
      method: "POST",
      body: data,
      multiples: true
    }).then(res => res.json()).catch(err => console.log(err))
  }

  function locate(){
    window.location.href = "/Signin"
  }

  return (
    <div className="signup179-container">

      <div className="signup179-signup179">

        <Navbar2 />
        <Footer2 />
        <img
          alt="Ellipse51717"
          src="/images/ellipse51717-6wza.svg"
          className="signup179-svg"
        />
        <img
          alt="Ellipse61718"
          src="/images/ellipse61718-9kkw.svg"
          className="signup179-svg1"
        />

        <div className="signup179-signinform575">
          <img
            alt="Rectangle8576"
            src="/images/rectangle8576-rcsk.svg"
            className="signup179-image"
          />

            <span className="signup179-text06">Sign up</span>
            <span className="signup179-text07">Name :</span>
            <span className="signup179-text08">Password :</span>
            <span className="signup179-text09">Confirm password :</span>
            <span className="signup179-text10">Email :</span>

        <Form>
          <Form.Control style={{width:"526px"}} className="signup179-image1" type="text" placeholder="Enter your first name" onChange={onHandleChange('name')}/>

          <Form.Control style={{width:"526px"}} className="signup179-image5" type="email" placeholder="Enter email" onChange={onHandleChange('email')}/>

          <Form.Control style={{width:"526px"}} className="signup179-image2" type="password" placeholder="Password" onChange={onHandleChange('password')}/>

          <Form.Control style={{width:"526px"}} className="signup179-image3" type="password" placeholder="Password" onChange={onHandleChange('password')}/>

          <Form.Control style={{width:"526px"}} className="signup179-image4" type="file" multiple onChange={onHandleChange('photo')}/>
          
        </Form>

        <button className="signup179-button577" onClick={() => api(formData).then(locate) }>
          <span className="signup179-text05">Sign up</span>
        </button>

        </div>
        <span className="signup179-text11">Image upload :</span>

      </div>

    </div>
  )
}

export default Signup