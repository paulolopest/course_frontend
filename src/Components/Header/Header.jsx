import React, { useContext, useState } from "react";
import "./Header.scss";
import { UserContext } from "../../Context/AccountContext";
import * as Icon from "@phosphor-icons/react";

const Header = () => {
   const [logoutModal, setLogoutModal] = useState(false);

   const { data, userLogout } = useContext(UserContext);

   return (
      <div className="hdr">
         <h1>Meta</h1>

         <div onClick={() => setLogoutModal(!logoutModal)}>
            <span>Admin</span>

            <div>
               <>
                  <p>{data?.name}</p>

                  {data?.profile_img ? (
                     <img src={data?.profile_img} />
                  ) : (
                     <span>{data?.name.charAt(0)}</span>
                  )}
               </>

               {logoutModal && (
                  <div onClick={userLogout} className="hdr-lgt">
                     <Icon.SignOut />
                     <p>Sair</p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
