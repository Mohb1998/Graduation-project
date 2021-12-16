import React from "react";
import {useState} from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup()
{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(event)
  {
    event.preventDefault()

    const response = await fetch("http://localhost:5000/Signup", {
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
      alert('Sign up successful')
      window.location.href = "Signin"
    }
    else
    {
      alert('Please check your username and password')
    }
   }

    return(
      <div class="signinup-container">
        <Navbar/>

        <div class="container mt-5 featuresContainer1">
        <h1>Sign up</h1>

          <div class="row">
            <div class="col-sm-8">
              <div class="card">
                <div class="card-body">

                  <form onSubmit = {handleRegister}>

                    <div class="form-group">
                      <label for="email">Email : </label>
                      <input 
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        type = "email"
                      />
                    </div>

                    <div class="form-group">
                      <label for="password">Password : </label>
                      <input
                      value = {password}
                      onChange = {(e) => setPassword(e.target.value)} 
                      type="password" 
                       />
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-dark">Sign up</button>

                  </form>

                </div>
              </div>
            </div>

            <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign up with Google
          </a>

          <a class="btn btn-block btn-social btn-facebook" href="/auth/facebook" role="button">
            <i class="fab fa-facebook"></i>
            Sign up with Facebook
          </a>

        </div>
      </div>
    </div>
          </div>
        </div>

        <Footer/>
      </div>
        
    )
}

export default Signup;