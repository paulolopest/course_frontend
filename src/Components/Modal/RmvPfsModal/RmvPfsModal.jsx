import React, { useContext } from "react";
import "./RmvPfsModal.scss";
import { GlobalContext } from "../../../Context/GlobalContext";
import useAxios from "../../../Hooks/useAxios";
import { ProfessorRequest } from "../../../Requests/ProfessorRequest";

const PR = new ProfessorRequest();

const RmvPfsModal = () => {
   const { rmvPfsModal, setRmvPfsModal } = useContext(GlobalContext);

   const { deleteReq } = useAxios();

   const handleClick = async () => {
      const { url, headers } = PR.DELETE_PROFESSOR(rmvPfsModal);

      await deleteReq(url, { headers });
      setRmvPfsModal(false);
   };
   return (
      <div className="rmv-pfs-mdl-ctr">
         <div className="rmv-pfs-mdl animeFadeIn">
            <h1>Deseja excluir essa conta?</h1>
            <div>
               <button onClick={() => setRmvPfsModal(false)}>Cancelar</button>
               <button onClick={handleClick}>Excluir</button>
            </div>
         </div>
      </div>
   );
};

export default RmvPfsModal;
