import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Home from "../Pages/Home/Home";

const RouterConfig = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/login" element={<LoginPage />}></Route>
         </Routes>
      </BrowserRouter>
   );
};

export default RouterConfig;
