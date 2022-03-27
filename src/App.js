import React from "react";

import {Routes,Route} from "react-router-dom";


//Hello
import Homepage from "./Pages/Homepage.jsx";
import Signup from "./Pages/Signup.jsx";
import StudentHomePage from "./Pages/Student-homepage.jsx";
import Signin from "./Pages/Signin.jsx";
import Teacherpage from "./Pages/Teacher-homepage.jsx";

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

        <Routes>
            <Route exact path='/Signin' element={<Signin/>} />
        </Routes>

        <Routes>
            <Route exact path='/StudentHomePage' element={<StudentHomePage/>} />
        </Routes>     

        <Routes>
            <Route exact path='/Teacherpage' element={<Teacherpage/>} />
        </Routes>

        <Routes>
            <Route exact path='/ImageUpload' element={<ImageUpload/>} />
        </Routes>
        </div>
    )
}

export default App;