import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Home from "../Pages/Home/Home";
import UserStorage from "../Context/AccountContext";

const RouterConfig = () => {
   return (
      <BrowserRouter>
         <UserStorage>
            <Routes>
               <Route path="/home/*" element={<Home />} />
               <Route path="/login" element={<LoginPage />} />
            </Routes>
         </UserStorage>
      </BrowserRouter>
   );
};

export default RouterConfig;
