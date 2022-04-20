import React from "react";

import {Routes,Route} from "react-router-dom";

import Homepage from "./views/Homepage.jsx";
import Signup from "./views/Signup.jsx";
import StudentHomePage from "./views/Student-homepage.jsx";
// import Signin from "./views/Signin.jsx";
import Teacherpage from "./views/Teacher-homepage.jsx";


import Landingpage from "./views/Landing page"
import Signin from "./views/signinrefactor.jsx"

function App()
{
    return(
        <div>
        <Routes>
            <Route exact path='/' element={<Homepage/>} />
        </Routes>

        <Routes>
            <Route exact path='/Signup' element={<Signup/>} />
        </Routes>

        {/* <Routes>
            <Route exact path='/Signin' element={<Signin/>} />
        </Routes> */}

        <Routes>
            <Route exact path='/StudentHomePage' element={<StudentHomePage/>} />
        </Routes>     

        <Routes>
            <Route exact path='/Teacherpage' element={<Teacherpage/>} />
        </Routes>

        <Routes>
            <Route exact path='/Landingpage' element={<Landingpage/>} />
        </Routes>

        <Routes>
            <Route exact path='/Signin' element={<Signin/>} />
        </Routes>
        </div>
    )
}

export default App;