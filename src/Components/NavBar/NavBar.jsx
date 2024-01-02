import React from "react";
import "./NavBar.scss";
import * as Icon from "@phosphor-icons/react";

const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className="nvbr-logo">
            <Icon.MetaLogo />
         </div>

         <div>
            <Icon.ChartBar />
            <p>Dashboard</p>
         </div>
         <div>
            <Icon.GraduationCap />
            <p>Cursos</p>
         </div>
         <div>
            <Icon.Users />
            <p>Professores</p>
         </div>
      </div>
   );
};

export default NavBar;
