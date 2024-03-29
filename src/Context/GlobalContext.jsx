import React from "react";
import useMedia from "../Hooks/useMedia";

export const GlobalContext = React.createContext("");

const GlobalStorage = ({ children }) => {
   const [addPfsModal, setAddPfsModal] = React.useState(false);
   const [rmvPfsModal, setRmvPfsModal] = React.useState(false);
   const [addCourseModal, setAddCourseModal] = React.useState(false);

   const mediumScreen = useMedia("(max-width: 1050px)");
   const smallScreen = useMedia("(max-width: 800px)");
   const mobileScreen = useMedia("(max-width: 600px)");

   return (
      <GlobalContext.Provider
         value={{
            addPfsModal,
            setAddPfsModal,
            rmvPfsModal,
            setRmvPfsModal,
            addCourseModal,
            setAddCourseModal,
            mediumScreen,
            smallScreen,
            mobileScreen,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalStorage;
