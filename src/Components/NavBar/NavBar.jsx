import React from "react";
import "./NavBar.scss";
import * as Icon from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
   return (
      <div className="nav-bar">
         <div className="nvbr-logo">
            <Icon.MetaLogo />
         </div>

         <Link to={"dashboard"}>
            <Icon.ChartBar />
            <p>Dashboard</p>
         </Link>
         <Link to={"cursos"}>
            <Icon.GraduationCap />
            <p>Cursos</p>
         </Link>
         <Link to={"professores"}>
            <Icon.Users />
            <p>Professores</p>
         </Link>
      </div>
   );
};

export default NavBar;
