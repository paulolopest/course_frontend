import React from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import useUtils from "../../Hooks/useUtils";
import AddPfsModal from "./AddPfsModal/AddPfsModal";
import RmvPfsModal from "./RmvPfsModal/RmvPfsModal";

const ModalIndex = () => {
   const { addPfsModal, setAddPfsModal, rmvPfsModal, setRmvPfsModal } =
      React.useContext(GlobalContext);

   const { useFreezeScreen, useCloseEsc } = useUtils();

   useFreezeScreen(addPfsModal);
   useFreezeScreen(rmvPfsModal);

   useCloseEsc(setAddPfsModal);
   useCloseEsc(setRmvPfsModal);

   return (
      <>
         {addPfsModal && <AddPfsModal />}
         {rmvPfsModal && <RmvPfsModal />}
      </>
   );
};

export default ModalIndex;
