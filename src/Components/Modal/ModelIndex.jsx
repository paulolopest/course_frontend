import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import useUtils from "../../Hooks/useUtils";
import AddPfsModal from "./AddPfsModal/AddPfsModal";
import RmvPfsModal from "./RmvPfsModal/RmvPfsModal";
import AddCourseModal from "./AddCourseModal/AddCourseModal";

const ModalIndex = () => {
   const {
      addPfsModal,
      setAddPfsModal,
      rmvPfsModal,
      setRmvPfsModal,
      addCourseModal,
      setAddCourseModal,
   } = React.useContext(GlobalContext);

   const { useFreezeScreen, useCloseEsc } = useUtils();

   useFreezeScreen(addPfsModal);
   useFreezeScreen(rmvPfsModal);

   useCloseEsc(setAddPfsModal);
   useCloseEsc(setRmvPfsModal);

   return (
      <>
         {addPfsModal && <AddPfsModal />}
         {rmvPfsModal && <RmvPfsModal />}
         {addCourseModal && <AddCourseModal />}
      </>
   );
};

export default ModalIndex;
