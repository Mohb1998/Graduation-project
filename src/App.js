import React from "react";
import {Routes,Route} from "react-router-dom";

import Teacherpage from "./views/Teacher-homepage.jsx";
import StudentHomePage from "./views/Student-homepage.jsx";


import Landingpage from "./views/Landing page"
import Signin from "./views/signinrefactor.jsx"
import Signup from "./views/signup-refactor.jsx"
import MeetingRoom from "./views/meeting-Room.jsx";

function App()
{
    return(
        <div>

        <Routes>
            <Route exact path='/' element={<Landingpage/>} />
        </Routes>

        <Routes>
            <Route exact path='/Signin' element={<Signin/>} />
        </Routes>

        <Routes>
            <Route exact path='/Signup' element={<Signup/>} />
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

        </div>
    )
}

export default App;