import React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./CustomSkeleton.scss";

import { useResolvedPath } from "react-router-dom";

const CustomSkeleton = ({ children }) => {
   const { pathname } = useResolvedPath();

   return (
      <div className="cst-skt">
         <NavBar />

         <div className="cst-skt-main">
            <Header />
            <div>{children}</div>
         </div>
      </div>
   );
};

export default CustomSkeleton;
