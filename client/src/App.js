import React from "react";
import {Routes,Route} from "react-router-dom";

import Landingpage from "./views/Landing-page"

import Teacherpage from "./views/Teacher-homepage.jsx";
import StudentHomePage from "./views/Student-homepage.jsx";

import SigninTeacher from "./views/Signin-teacher.jsx"
import Signinstudent from "./views/Signin-student.jsx";

import PreSignin from "./views/PreSignin.jsx"

import SignupStudent from "./views/Signup-Student.jsx"

import MeetingRoom2 from "./views/Meeting-Room2.jsx";
import MeetingRoom from "./views/Meeting-Room.jsx";

import Forgotcredentials from "./views/Forgotcredentials";

// import Test from "./views/Test";

function App()
{
    return(
        <div>

            <Routes>
                <Route exact path='/' element={<Landingpage/>} />
            </Routes>

            {/* <Routes>
                <Route exact path='Test' element={<Test/>} />
            </Routes> */}

            <Routes>
                <Route exact path='/SigninTeacher' element={<SigninTeacher/>} />
            </Routes>

            <Routes>
                <Route exact path='/SignupStudent' element={<SignupStudent/>} />
            </Routes>

            <Routes>
                <Route exact path='/StudentHomePage' element={<StudentHomePage/>} />
            </Routes>     

            <Routes>
                <Route exact path='/Teacherpage' element={<Teacherpage/>} />
            </Routes>

            <Routes>
                <Route exact path='/MeetingRoom' element={<MeetingRoom/>} />
            </Routes>

            <Routes>
                <Route exact path='/MeetingRoom2' element={<MeetingRoom2/>} />
            </Routes>

            <Routes>
                <Route exact path='/Signinstudent' element={<Signinstudent/>} />
            </Routes>

            <Routes>
                <Route exact path='/PreSignin' element={<PreSignin/>} />
            </Routes>

            <Routes>
                <Route exact path='/Forgotcredentials' element={<Forgotcredentials/>} />
            </Routes>

        </div>
    )
}

export default App;