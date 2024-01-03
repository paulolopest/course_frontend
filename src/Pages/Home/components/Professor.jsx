import React, { useContext, useEffect } from "react";
import * as Icon from "@phosphor-icons/react";
import "./../../../Styles/Pages/Home/components/Professor.scss";
import useAxios from "../../../Hooks/useAxios";
import { ProfessorRequest } from "../../../Requests/ProfessorRequest";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../Context/GlobalContext";

const PR = new ProfessorRequest();

const Professor = () => {
   const { data, get } = useAxios();

   const { addPfsModal, setAddPfsModal, setRmvPfsModal, rmvPfsModal } = useContext(GlobalContext);

   useEffect(() => {
      const { url } = PR.GET_ALL_PROFESSORS();

      get(url);
   }, [addPfsModal, rmvPfsModal]);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const pfsMap = data?.map((pf) => (
      <div key={pf.id} className="pfs-pg-pfs-ctr-cd">
         <div className="pfs-ctr-cd-user">
            {pf.profile_img ? <img src={pf.profile_img} /> : <span>{pf.name.charAt(0)}</span>}
            <p>
               {pf.name} {pf.lastname}
            </p>
         </div>

         <p className="pfs-ctr-cd-email">{pf.email}</p>

         <div className="pfs-ctr-cd-offc">
            <p>Professor</p>
         </div>

         <div className="pfs-ctr-cd-fn-btn">
            <button onClick={() => setRmvPfsModal(pf.id)}>
               <Icon.Trash />
            </button>
         </div>
      </div>
   ));

   return (
      <div className="pfs-pg animeUp">
         <div className="pfs-pg-title">
            <div>
               <h1>Professores</h1>
               <p>Gerencie os usuários da plataforma</p>
            </div>

            <button onClick={() => setAddPfsModal(true)}>
               <Icon.Plus />
               <p>Novo instrutor</p>
            </button>
         </div>

         <div className="pfs-pg-src-ctr">
            <div className="pfs-pg-flt-src">
               <Icon.MagnifyingGlass />
               <input placeholder="Nome do usuário" />
            </div>

            <button className="pfs-pg-flt-button">
               <p>Cargo</p>
               <Icon.CaretDown />
            </button>
         </div>

         <div className="pfs-lst-sct">
            <div className="pfs-pg-ltn">
               <button>
                  <p>Usuário</p>
                  <Icon.CaretDown />
               </button>
               <button>
                  <p>E-mail</p>
                  <Icon.CaretDown />
               </button>
               <button>
                  <p>Cargo</p>
                  <Icon.CaretDown />
               </button>

               <div />
            </div>

            <div className="pfs-pg-pfs-ctr">{pfsMap}</div>
         </div>
      </div>
   );
};

export default Professor;
