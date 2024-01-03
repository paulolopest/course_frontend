import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Home from "../Pages/Home/Home";
import IndexStorage from "../Context/IndexContext";
import ModalIndex from "../Components/Modal/ModelIndex";

const RouterConfig = () => {
   return (
      <BrowserRouter>
         <IndexStorage>
            <ModalIndex />
            <Routes>
               <Route path="/*" element={<Home />} />
               <Route path="/login" element={<LoginPage />} />
            </Routes>
         </IndexStorage>
      </BrowserRouter>
   );
};

export default RouterConfig;
