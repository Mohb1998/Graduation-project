import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'

import '../css/signup-teacher.css'

import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'


const SignupTeacher = (props) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
    formData: new FormData()
  })

  const {
    name,
    formData,
    email,
    password,
    error,
    success
  } = values

/* A function that is used to handle the change of the input fields. */
  const onHandleChange = name => event => {
    const value = event.target.value;
    formData.set(name, value);
  }

  const api = (data) => {
    return fetch("/SignupTeacher", {
      method: "POST",
      body: data,
      multiples: true
    }).then(res => res.json()).catch(err => console.log(err))
  }

  function locate(){
    window.location.href = "/Signin"
  }
  
  return (
    <div className="signup-teacher1428-container">
      <div className="signup-teacher1428-signup-teacher1428">
        <div className="signup-teacher1428-signinform1429">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTE2MicgaGVpZ2h0PSc2NTQnIHZpZXdCb3g9JzAgMCAxMTYyIDY1NCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHJlY3QgeT0nMC41NzAzMTInIHdpZHRoPScxMTYyJyBoZWlnaHQ9JzY1My40MycgZmlsbD0nI0IzQ0VGNycgZmlsbC1vcGFjaXR5PScwLjM5Jy8+Cjwvc3ZnPgo="
            alt="Rectangle814210"
            className="signup-teacher1428-image"
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
          
        </Form>
        <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTg0JyBoZWlnaHQ9JzQyJyB2aWV3Qm94PScwIDAgMTg0IDQyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgo8cmVjdCB4PScwLjM3MjgwMycgeT0nMC4yMjYwNzQnIHdpZHRoPScxODMuMjU0JyBoZWlnaHQ9JzQxLjI1MzcnIGZpbGw9JyMzOTZERjEnLz4KPHBhdGggZD0nTTYwLjY0NjIgMTYuNzY1MkM2MC41NDQgMTUuOTAxNSA2MC4xMjkyIDE1LjIzMTEgNTkuNDAxOSAxNC43NTM4QzU4LjY3NDYgMTQuMjc2NSA1Ny43ODI2IDE0LjAzNzkgNTYuNzI1OCAxNC4wMzc5QzU1Ljk1MzEgMTQuMDM3OSA1NS4yNzY5IDE0LjE2MjkgNTQuNjk3NCAxNC40MTI5QzU0LjEyMzUgMTQuNjYyOSA1My42NzQ2IDE1LjAwNjYgNTMuMzUwOCAxNS40NDQxQzUzLjAzMjYgMTUuODgxNiA1Mi44NzM1IDE2LjM3ODggNTIuODczNSAxNi45MzU2QzUyLjg3MzUgMTcuNDAxNSA1Mi45ODQzIDE3LjgwMjEgNTMuMjA1OSAxOC4xMzczQzUzLjQzMzIgMTguNDY2OSA1My43MjI5IDE4Ljc0MjQgNTQuMDc1MiAxOC45NjRDNTQuNDI3NSAxOS4xNzk5IDU0Ljc5NjggMTkuMzU4OSA1NS4xODMyIDE5LjUwMUM1NS41Njk1IDE5LjYzNzMgNTUuOTI0NiAxOS43NDgxIDU2LjI0ODUgMTkuODMzNEw1OC4wMjEyIDIwLjMxMDZDNTguNDc1OCAyMC40Mjk5IDU4Ljk4MTUgMjAuNTk0NyA1OS41MzgzIDIwLjgwNDlDNjAuMTAwOCAyMS4wMTUyIDYwLjYzNzcgMjEuMzAyMSA2MS4xNDkxIDIxLjY2NTdDNjEuNjY2MSAyMi4wMjM3IDYyLjA5MjMgMjIuNDgzOSA2Mi40Mjc1IDIzLjA0NjRDNjIuNzYyNyAyMy42MDg5IDYyLjkzMDMgMjQuMjk5MyA2Mi45MzAzIDI1LjExNzRDNjIuOTMwMyAyNi4wNjA2IDYyLjY4MzIgMjYuOTEyOSA2Mi4xODg4IDI3LjY3NDNDNjEuNzAwMiAyOC40MzU2IDYwLjk4NDMgMjkuMDQwNyA2MC4wNDExIDI5LjQ4OTZDNTkuMTAzNiAyOS45Mzg1IDU3Ljk2NDQgMzAuMTYyOSA1Ni42MjM1IDMwLjE2MjlDNTUuMzczNSAzMC4xNjI5IDU0LjI5MTEgMjkuOTYxMiA1My4zNzYzIDI5LjU1NzhDNTIuNDY3MyAyOS4xNTQ0IDUxLjc1MTMgMjguNTkxOSA1MS4yMjg2IDI3Ljg3MDNDNTAuNzExNiAyNy4xNDg3IDUwLjQxOSAyNi4zMTA2IDUwLjM1MDggMjUuMzU2MUg1Mi41MzI2QzUyLjU4OTQgMjYuMDE1MiA1Mi44MTEgMjYuNTYwNiA1My4xOTc0IDI2Ljk5MjRDNTMuNTg5NCAyNy40MTg2IDU0LjA4MzcgMjcuNzM2OCA1NC42ODAzIDI3Ljk0N0M1NS4yODI2IDI4LjE1MTUgNTUuOTMwMyAyOC4yNTM4IDU2LjYyMzUgMjguMjUzOEM1Ny40MzAzIDI4LjI1MzggNTguMTU0OCAyOC4xMjMxIDU4Ljc5NjggMjcuODYxOEM1OS40Mzg4IDI3LjU5NDcgNTkuOTQ3NCAyNy4yMjU0IDYwLjMyMjQgMjYuNzUzOEM2MC42OTc0IDI2LjI3NjUgNjAuODg0OSAyNS43MTk3IDYwLjg4NDkgMjUuMDgzNEM2MC44ODQ5IDI0LjUwMzggNjAuNzIyOSAyNC4wMzIyIDYwLjM5OTEgMjMuNjY4NkM2MC4wNzUyIDIzLjMwNDkgNTkuNjQ5MSAyMy4wMDk1IDU5LjEyMDcgMjIuNzgyMkM1OC41OTIzIDIyLjU1NDkgNTguMDIxMiAyMi4zNTYxIDU3LjQwNzYgMjIuMTg1Nkw1NS4yNTk5IDIxLjU3MkM1My44OTYyIDIxLjE3OTkgNTIuODE2NyAyMC42MjAzIDUyLjAyMTIgMTkuODkzQzUxLjIyNTggMTkuMTY1NyA1MC44MjgxIDE4LjIxNCA1MC44MjgxIDE3LjAzNzlDNTAuODI4MSAxNi4wNjA2IDUxLjA5MjMgMTUuMjA4NCA1MS42MjA3IDE0LjQ4MTFDNTIuMTU0OCAxMy43NDgxIDUyLjg3MDcgMTMuMTc5OSA1My43Njg0IDEyLjc3NjVDNTQuNjcxOCAxMi4zNjc0IDU1LjY4MDMgMTIuMTYyOSA1Ni43OTQgMTIuMTYyOUM1Ny45MTkgMTIuMTYyOSA1OC45MTkgMTIuMzY0NiA1OS43OTQgMTIuNzY4QzYwLjY2OSAxMy4xNjU3IDYxLjM2MjEgMTMuNzExMiA2MS44NzM1IDE0LjQwNDRDNjIuMzkwNiAxNS4wOTc2IDYyLjY2MzMgMTUuODg0NSA2Mi42OTE3IDE2Ljc2NTJINjAuNjQ2MlpNNjYuMTMyNyAyOS44NTYxVjE2Ljc2NTJINjguMTQ0MVYyOS44NTYxSDY2LjEzMjdaTTY3LjE1NTUgMTQuNTgzNEM2Ni43NjM0IDE0LjU4MzQgNjYuNDI1NCAxNC40NDk4IDY2LjE0MTMgMTQuMTgyOEM2NS44NjI5IDEzLjkxNTcgNjUuNzIzNyAxMy41OTQ3IDY1LjcyMzcgMTMuMjE5N0M2NS43MjM3IDEyLjg0NDcgNjUuODYyOSAxMi41MjM3IDY2LjE0MTMgMTIuMjU2NkM2Ni40MjU0IDExLjk4OTYgNjYuNzYzNCAxMS44NTYxIDY3LjE1NTUgMTEuODU2MUM2Ny41NDc1IDExLjg1NjEgNjcuODgyNyAxMS45ODk2IDY4LjE2MTIgMTIuMjU2NkM2OC40NDUyIDEyLjUyMzcgNjguNTg3MyAxMi44NDQ3IDY4LjU4NzMgMTMuMjE5N0M2OC41ODczIDEzLjU5NDcgNjguNDQ1MiAxMy45MTU3IDY4LjE2MTIgMTQuMTgyOEM2Ny44ODI3IDE0LjQ0OTggNjcuNTQ3NSAxNC41ODM0IDY3LjE1NTUgMTQuNTgzNFpNNzcuMTEyMSAzNS4wMzc5Qzc2LjE0MDYgMzUuMDM3OSA3NS4zMDUzIDM0LjkxMjkgNzQuNjA2NSAzNC42NjI5QzczLjkwNzYgMzQuNDE4NiA3My4zMjUyIDM0LjA5NDcgNzIuODU5MyAzMy42OTEzQzcyLjM5OTEgMzMuMjkzNiA3Mi4wMzI2IDMyLjg2NzQgNzEuNzU5OSAzMi40MTI5TDczLjM2MjEgMzEuMjg3OUM3My41NDQgMzEuNTI2NSA3My43NzQxIDMxLjc5OTMgNzQuMDUyNSAzMi4xMDYxQzc0LjMzMDkgMzIuNDE4NiA3NC43MTE2IDMyLjY4ODUgNzUuMTk0NSAzMi45MTU3Qzc1LjY4MzIgMzMuMTQ4NyA3Ni4zMjI0IDMzLjI2NTIgNzcuMTEyMSAzMy4yNjUyQzc4LjE2OSAzMy4yNjUyIDc5LjA0MTEgMzMuMDA5NSA3OS43Mjg2IDMyLjQ5ODFDODAuNDE2MSAzMS45ODY4IDgwLjc1OTkgMzEuMTg1NiA4MC43NTk5IDMwLjA5NDdWMjcuNDM1Nkg4MC41ODk0QzgwLjQ0MTcgMjcuNjc0MyA4MC4yMzE1IDI3Ljk2OTcgNzkuOTU4NyAyOC4zMjJDNzkuNjkxNyAyOC42Njg2IDc5LjMwNTMgMjguOTc4MiA3OC43OTk2IDI5LjI1MUM3OC4yOTk2IDI5LjUxOCA3Ny42MjM1IDI5LjY1MTUgNzYuNzcxMiAyOS42NTE1Qzc1LjcxNDQgMjkuNjUxNSA3NC43NjU2IDI5LjQwMTUgNzMuOTI0NiAyOC45MDE1QzczLjA4OTQgMjguNDAxNSA3Mi40Mjc1IDI3LjY3NDMgNzEuOTM4OCAyNi43MTk3QzcxLjQ1NTkgMjUuNzY1MiA3MS4yMTQ0IDI0LjYwNjEgNzEuMjE0NCAyMy4yNDI0QzcxLjIxNDQgMjEuOTAxNSA3MS40NTAyIDIwLjczMzkgNzEuOTIxOCAxOS43Mzk2QzcyLjM5MzQgMTguNzM5NiA3My4wNDk2IDE3Ljk2NjkgNzMuODkwNiAxNy40MjE0Qzc0LjczMTUgMTYuODcwMyA3NS43MDMxIDE2LjU5NDcgNzYuODA1MyAxNi41OTQ3Qzc3LjY1NzYgMTYuNTk0NyA3OC4zMzM3IDE2LjczNjggNzguODMzNyAxNy4wMjA5Qzc5LjMzOTQgMTcuMjk5MyA3OS43MjU4IDE3LjYxNzQgNzkuOTkyOCAxNy45NzU0QzgwLjI2NTYgMTguMzI3NyA4MC40NzU4IDE4LjYxNzQgODAuNjIzNSAxOC44NDQ3SDgwLjgyODFWMTYuNzY1Mkg4Mi43NzEyVjMwLjIzMTFDODIuNzcxMiAzMS4zNTYxIDgyLjUxNTYgMzIuMjcwOSA4Mi4wMDQyIDMyLjk3NTRDODEuNDk4NSAzMy42ODU2IDgwLjgxNjcgMzQuMjA1NSA3OS45NTg3IDM0LjUzNTFDNzkuMTA2NSAzNC44NzAzIDc4LjE1NzYgMzUuMDM3OSA3Ny4xMTIxIDM1LjAzNzlaTTc3LjA0NCAyNy44NDQ3Qzc3Ljg1MDggMjcuODQ0NyA3OC41MzI2IDI3LjY2MDEgNzkuMDg5NCAyNy4yOTA3Qzc5LjY0NjIgMjYuOTIxNCA4MC4wNjk1IDI2LjM5MDIgODAuMzU5MyAyNS42OTdDODAuNjQ5MSAyNS4wMDM4IDgwLjc5NCAyNC4xNzQzIDgwLjc5NCAyMy4yMDg0QzgwLjc5NCAyMi4yNjUyIDgwLjY1MTkgMjEuNDMyOCA4MC4zNjc4IDIwLjcxMTJDODAuMDgzNyAxOS45ODk2IDc5LjY2MzMgMTkuNDI0MyA3OS4xMDY1IDE5LjAxNTJDNzguNTQ5NiAxOC42MDYxIDc3Ljg2MjEgMTguNDAxNSA3Ny4wNDQgMTguNDAxNUM3Ni4xOTE3IDE4LjQwMTUgNzUuNDgxNSAxOC42MTc0IDc0LjkxMzMgMTkuMDQ5M0M3NC4zNTA4IDE5LjQ4MTEgNzMuOTI3NSAyMC4wNjA2IDczLjY0MzQgMjAuNzg3OUM3My4zNjUgMjEuNTE1MiA3My4yMjU4IDIyLjMyMiA3My4yMjU4IDIzLjIwODRDNzMuMjI1OCAyNC4xMTc0IDczLjM2NzggMjQuOTIxNCA3My42NTE5IDI1LjYyMDNDNzMuOTQxNyAyNi4zMTM1IDc0LjM2NzggMjYuODU4OSA3NC45MzAzIDI3LjI1NjZDNzUuNDk4NSAyNy42NDg3IDc2LjIwMzEgMjcuODQ0NyA3Ny4wNDQgMjcuODQ0N1pNODguNDY0NCAyMS45ODExVjI5Ljg1NjFIODYuNDUzMVYxNi43NjUySDg4LjM5NjJWMTguODEwNkg4OC41NjY3Qzg4Ljg3MzUgMTguMTQ1OSA4OS4zMzk0IDE3LjYxMTggODkuOTY0NCAxNy4yMDg0QzkwLjU4OTQgMTYuNzk5MyA5MS4zOTYyIDE2LjU5NDcgOTIuMzg0OSAxNi41OTQ3QzkzLjI3MTIgMTYuNTk0NyA5NC4wNDY4IDE2Ljc3NjUgOTQuNzExNiAxNy4xNDAyQzk1LjM3NjMgMTcuNDk4MSA5NS44OTM0IDE4LjA0MzYgOTYuMjYyNyAxOC43NzY1Qzk2LjYzMiAxOS41MDM4IDk2LjgxNjcgMjAuNDI0MyA5Ni44MTY3IDIxLjUzNzlWMjkuODU2MUg5NC44MDUzVjIxLjY3NDNDOTQuODA1MyAyMC42NDU5IDk0LjUzODMgMTkuODQ0NyA5NC4wMDQyIDE5LjI3MDlDOTMuNDcwMSAxOC42OTEzIDkyLjczNzEgMTguNDAxNSA5MS44MDUzIDE4LjQwMTVDOTEuMTYzMyAxOC40MDE1IDkwLjU4OTQgMTguNTQwNyA5MC4wODM3IDE4LjgxOTFDODkuNTgzNyAxOS4wOTc2IDg5LjE4ODggMTkuNTAzOCA4OC44OTkxIDIwLjAzNzlDODguNjA5MyAyMC41NzIgODguNDY0NCAyMS4yMTk3IDg4LjQ2NDQgMjEuOTgxMVpNMTE1LjQ5MiAyNC41MDM4VjE2Ljc2NTJIMTE3LjUwM1YyOS44NTYxSDExNS40OTJWMjcuNjQwMkgxMTUuMzU2QzExNS4wNDkgMjguMzA0OSAxMTQuNTcyIDI4Ljg3MDMgMTEzLjkyNCAyOS4zMzYyQzExMy4yNzYgMjkuNzk2NCAxMTIuNDU4IDMwLjAyNjUgMTExLjQ2OSAzMC4wMjY1QzExMC42NTEgMzAuMDI2NSAxMDkuOTI0IDI5Ljg0NzYgMTA5LjI4OCAyOS40ODk2QzEwOC42NTEgMjkuMTI2IDEwOC4xNTEgMjguNTgwNSAxMDcuNzg4IDI3Ljg1MzJDMTA3LjQyNCAyNy4xMjAzIDEwNy4yNDIgMjYuMTk3IDEwNy4yNDIgMjUuMDgzNFYxNi43NjUySDEwOS4yNTNWMjQuOTQ3QzEwOS4yNTMgMjUuOTAxNSAxMDkuNTIxIDI2LjY2MjkgMTEwLjA1NSAyNy4yMzExQzExMC41OTQgMjcuNzk5MyAxMTEuMjgyIDI4LjA4MzQgMTEyLjExNyAyOC4wODM0QzExMi42MTcgMjguMDgzNCAxMTMuMTI2IDI3Ljk1NTUgMTEzLjY0MyAyNy42OTk4QzExNC4xNjUgMjcuNDQ0MSAxMTQuNjAzIDI3LjA1MjEgMTE0Ljk1NSAyNi41MjM3QzExNS4zMTMgMjUuOTk1MyAxMTUuNDkyIDI1LjMyMiAxMTUuNDkyIDI0LjUwMzhaTTEyMS4xODcgMzQuNzY1MlYxNi43NjUySDEyMy4xMzFWMTguODQ0N0gxMjMuMzY5QzEyMy41MTcgMTguNjE3NCAxMjMuNzIyIDE4LjMyNzcgMTIzLjk4MyAxNy45NzU0QzEyNC4yNSAxNy42MTc0IDEyNC42MzEgMTcuMjk5MyAxMjUuMTI1IDE3LjAyMDlDMTI1LjYyNSAxNi43MzY4IDEyNi4zMDEgMTYuNTk0NyAxMjcuMTUzIDE2LjU5NDdDMTI4LjI1NiAxNi41OTQ3IDEyOS4yMjcgMTYuODcwMyAxMzAuMDY4IDE3LjQyMTRDMTMwLjkwOSAxNy45NzI2IDEzMS41NjUgMTguNzUzOCAxMzIuMDM3IDE5Ljc2NTJDMTMyLjUwOCAyMC43NzY1IDEzMi43NDQgMjEuOTY5NyAxMzIuNzQ0IDIzLjM0NDdDMTMyLjc0NCAyNC43MzExIDEzMi41MDggMjUuOTMyOCAxMzIuMDM3IDI2Ljk0OThDMTMxLjU2NSAyNy45NjEyIDEzMC45MTIgMjguNzQ1MyAxMzAuMDc3IDI5LjMwMjFDMTI5LjI0MSAyOS44NTMyIDEyOC4yNzggMzAuMTI4OCAxMjcuMTg3IDMwLjEyODhDMTI2LjM0NyAzMC4xMjg4IDEyNS42NzMgMjkuOTg5NiAxMjUuMTY4IDI5LjcxMTJDMTI0LjY2MiAyOS40MjcxIDEyNC4yNzMgMjkuMTA2MSAxMjQgMjguNzQ4MUMxMjMuNzI3IDI4LjM4NDUgMTIzLjUxNyAyOC4wODM0IDEyMy4zNjkgMjcuODQ0N0gxMjMuMTk5VjM0Ljc2NTJIMTIxLjE4N1pNMTIzLjE2NSAyMy4zMTA2QzEyMy4xNjUgMjQuMjk5MyAxMjMuMzEgMjUuMTcxNCAxMjMuNTk5IDI1LjkyNzFDMTIzLjg4OSAyNi42NzcxIDEyNC4zMTIgMjcuMjY1MiAxMjQuODY5IDI3LjY5MTNDMTI1LjQyNiAyOC4xMTE4IDEyNi4xMDggMjguMzIyIDEyNi45MTUgMjguMzIyQzEyNy43NTYgMjguMzIyIDEyOC40NTcgMjguMTAwNCAxMjkuMDIgMjcuNjU3MkMxMjkuNTg4IDI3LjIwODQgMTMwLjAxNCAyNi42MDYxIDEzMC4yOTggMjUuODUwNEMxMzAuNTg4IDI1LjA4OSAxMzAuNzMzIDI0LjI0MjQgMTMwLjczMyAyMy4zMTA2QzEzMC43MzMgMjIuMzkwMiAxMzAuNTkxIDIxLjU2MDYgMTMwLjMwNyAyMC44MjJDMTMwLjAyOCAyMC4wNzc3IDEyOS42MDUgMTkuNDg5NiAxMjkuMDM3IDE5LjA1NzhDMTI4LjQ3NCAxOC42MjAzIDEyNy43NjcgMTguNDAxNSAxMjYuOTE1IDE4LjQwMTVDMTI2LjA5NyAxOC40MDE1IDEyNS40MDkgMTguNjA4OSAxMjQuODUyIDE5LjAyMzdDMTI0LjI5NSAxOS40MzI4IDEyMy44NzUgMjAuMDA2NiAxMjMuNTkxIDIwLjc0NTNDMTIzLjMwNyAyMS40NzgyIDEyMy4xNjUgMjIuMzMzNCAxMjMuMTY1IDIzLjMxMDZaJyBmaWxsPSd3aGl0ZScvPgo8L3N2Zz4K"
            alt="Button14211"
            className="signup-teacher1428-image1"
          />
        <button className="signup-teacher1428-image1" onClick={() => api(formData).then(locate) }>
        </button>
          
        </div>
        <Navbar2 />
        <Footer2 />
      </div>
    </div>
  )
}

export default SignupTeacher
