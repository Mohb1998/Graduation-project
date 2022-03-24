import React from "react";
import {useState} from "react"

import axios from "axios";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ImageUpload()
{
    const [file, setFile] = useState('')

    const inputChange = (e) => {
       console.log(e.target.files)
       setFile(e.target.files[0])
    }

    /**
     * It takes the file that the user has uploaded and sends it to the server.
     * @param event - The event that was triggered.
     */
    const onSubmit = (event) =>
    {
        event.preventDefault()

        const data = new FormData();
        data.append('file', file);

        axios.post("//localhost:5000/Upload", data)
            .then((e) => {
                console.log("Success")
            })
            .catch((e) => {
                console.log("Error")
            })

    //     const response = fetch("http://localhost:5000/Upload", {
    //     method : "POST",
    //     headers : {
    //       'Content-Type' : 'application/json',
    //     },
    //     body : JSON.stringify({
    //       file
    //     }),
    //   })

    //   const data =  response.json()
    //   if(data.status === "ok")
    //   {
    //     alert('Upload successsful')
    //     window.location.href = "Signin"
    //   }
    //   else
    //   {
    //     alert('Failed')
    //   }

    }

    return(
      <div class="signinup-container">
      <Navbar />
  
      <div class="Signup-form mt-5 featuresContainer1">
          <h1>Upload your images</h1>

            <Form onSubmit={onSubmit}>
              <Form.Label>Image upload</Form.Label>
              <Form.Control type="file" name="file" id="file" onChange={inputChange}/>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>                 
            </Form>

      </div>
  
      <Footer />
  </div>
        
    )
}

export default ImageUpload;