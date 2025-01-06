import React from "react";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User";  
import {BrowserRouter, Route,Routes} from "react-router-dom";


const Apps = () => {    
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/update" element={<UpdateUser />} />
            </Routes>
        </BrowserRouter>
    </div>;
}   
 export default Apps;