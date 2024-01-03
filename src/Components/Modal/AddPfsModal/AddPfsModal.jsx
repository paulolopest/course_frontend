import React, { useContext } from "react";
import "./AddPfsModal.scss";
import { useForm } from "react-hook-form";
import CustomInput from "../../CustomForm/CustomInput/CustomInput";
import { ProfessorRequest } from "../../../Requests/ProfessorRequest";
import useAxios from "../../../Hooks/useAxios";
import { GlobalContext } from "../../../Context/GlobalContext";

const PR = new ProfessorRequest();

const AddPfsModal = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const { setAddPfsModal } = useContext(GlobalContext);

   const { post } = useAxios();

   const addPf = async (data) => {
      const body = {
         email: data.email,
         name: data.name,
         lastname: data.lastname,
         profileImg: data.profileImg,
      };

      const { url, headers } = PR.ADD_PROFESSOR();
      await post(url, body, { headers });

      setAddPfsModal(false);
   };

   return (
      <div className="pfs-pg-mdl">
         <div className="pfs-mdl-box animeFadeIn">
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
   );
};

export default AddPfsModal;
