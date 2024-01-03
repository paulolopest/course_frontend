import React, { useContext } from "react";
import CustomInput from "../../CustomForm/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../Context/GlobalContext";
import { CourseRequest } from "../../../Requests/CourseRequest";
import useAxios from "../../../Hooks/useAxios";

const PR = new CourseRequest();

const AddCourseModal = () => {
   const { setAddCourseModal } = useContext(GlobalContext);

   const { post } = useAxios();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const addCrs = async (data) => {
      const body = {
         name: data.name,
         description: data.name,
         category: data.category,
         difficulty: data.difficulty,
         programmingLanguage: data.programmingLanguage,
      };

      const { url, headers } = PR.ADD_COURSE();
      await post(url, body, { headers });

      setAddCourseModal(false);
   };

   return (
      <div className="pfs-pg-mdl">
         <div className="pfs-mdl-box animeFadeIn">
            <h1>Adicionar instrutor</h1>

            <div className="pfs-mdl-box-inpt-ctr">
               <CustomInput
                  register={register}
                  name="name"
                  type="name"
                  required={"Preencha esse campo"}
                  errors={errors.credential?.message}
                  placeholder={"Nome"}
                  watch={watch("name")}
               />

               <div className="dbl-ipt-ctr">
                  <div>
                     <CustomInput
                        register={register}
                        name="description"
                        type="description"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"Descrição"}
                        watch={watch("description")}
                     />
                  </div>

                  <div>
                     <CustomInput
                        register={register}
                        name="category"
                        type="category"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"Categoria"}
                        watch={watch("category")}
                     />
                  </div>
               </div>

               <div className="dbl-ipt-ctr">
                  <div>
                     <CustomInput
                        register={register}
                        name="difficulty"
                        type="difficulty"
                        errors={errors.credential?.message}
                        placeholder={"Dificuldade"}
                        watch={watch("Difficulty")}
                     />
                  </div>

                  <div>
                     <CustomInput
                        register={register}
                        name="programmingLanguage"
                        type="programmingLanguage"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"Linguagem"}
                        watch={watch("programmingLanguage")}
                     />
                  </div>
               </div>
            </div>

            <button onClick={handleSubmit(addCrs)}>Adicionar</button>
         </div>
      </div>
   );
};

export default AddCourseModal;
