import React from "react";
import "./Header.scss";

const Header = () => {
   const name = "Paulo Lopes";
   return (
      <div className="hdr">
         <h1>Meta</h1>

         <div>
            <span>Admin</span>

            <div>
               <p>{name}</p>
               <span>{name.charAt(0)}</span>
            </div>
         </div>
      </div>
   );
};

export default Header;
