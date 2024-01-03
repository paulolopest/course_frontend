import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react";
import "./../../../Styles/Pages/Home/components/Professor.scss";
import useAxios from "../../../Hooks/useAxios";
import { ProfessorRequest } from "../../../Requests/ProfessorRequest";
import CustomInput from "../../../Components/CustomForm/CustomInput/CustomInput";
import { useForm } from "react-hook-form";

const PR = new ProfessorRequest();

const Professor = () => {
   const [addModal, setAddModal] = useState(false);
   const [userActionModal, setUserActionModal] = useState(false);
   const { data, get, post } = useAxios();

   useEffect(() => {
      const { url } = PR.GET_ALL_PROFESSORS();

      get(url);
   }, []);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const addPf = async (data) => {
      const body = {
         email: data.email,
         name: data.name,
         lastname: data.lastname,
         profileImg: data.profileImg,
      };

      const { url, headers } = PR.ADD_PROFESSOR();
      await post(url, body, { headers });
      setAddModal(false);
   };

   const deletePf = () => {};

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
            <button onClick={() => setUserActionModal(!userActionModal)}>
               <Icon.Trash />
            </button>
         </div>
      </div>
   ));

   return (
      <>
         <div className="pfs-pg animeUp">
            <div className="pfs-pg-title">
               <div>
                  <h1>Professores</h1>
                  <p>Gerencie os usuários da plataforma</p>
               </div>

               <button onClick={() => setAddModal(true)}>
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

         {addModal && (
            <div className="pfs-pg-mdl">
               <div className="pfs-mdl-box">
                  <h1>Adicionar instrutor</h1>

                  <div className="pfs-mdl-box-inpt-ctr">
                     <CustomInput
                        register={register}
                        name="email"
                        type="email"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"E-mail"}
                        watch={watch("password")}
                     />

                     <div className="dbl-ipt-ctr">
                        <div>
                           <CustomInput
                              register={register}
                              name="name"
                              type="name"
                              required={"Preencha esse campo"}
                              errors={errors.credential?.message}
                              placeholder={"Nome"}
                              watch={watch("password")}
                           />
                        </div>

                        <div>
                           <CustomInput
                              register={register}
                              name="lastname"
                              type="lastname"
                              required={"Preencha esse campo"}
                              errors={errors.credential?.message}
                              placeholder={"Sobrenome"}
                              watch={watch("password")}
                           />
                        </div>
                     </div>

                     <CustomInput
                        register={register}
                        name="profileImg"
                        type="profileImg"
                        errors={errors.credential?.message}
                        placeholder={"Link para foto"}
                        watch={watch("password")}
                     />
                  </div>

                  <button onClick={handleSubmit(addPf)}>Adicionar</button>
               </div>
            </div>
         )}
      </>
   );
};

export default Professor;
