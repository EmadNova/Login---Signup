import React from 'react';
import {Routes, Route} from "react-router-dom";

import Signup from "./component/Signup/Signup";
import Login from "./component/Login/Login";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="SignUp" element={<Signup/>}/>
                <Route path="Login" element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default App;