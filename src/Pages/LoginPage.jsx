import React, { useEffect } from "react";
import "./../Styles/Pages/LoginPage.scss";
import CustomInput from "../Components/CustomForm/CustomInput/CustomInput";
import { useForm } from "react-hook-form";
import * as Icon from "@phosphor-icons/react";
import { UserContext } from "../Context/AccountContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
   const { error, loading, userLogin, userRegister, login } = React.useContext(UserContext);

   const navigate = useNavigate();

   useEffect(() => {
      if (login) {
         navigate("/home");
      }
   }, [login]);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const handleSend = async (data) => {
      await userLogin(data.email, data.password);
   };

   if (loading) return <p>Loading...</p>;

   return (
      <div className="lgn-page">
         <div className="lgn-pg-ctr animeDown">
            <h1>Faça seu login na plataforma</h1>

            <div className="lgn-pg-box">
               <div className="lgn-pg-box-ipt">
                  <div className="lgn-inpt-ctr">
                     <CustomInput
                        register={register}
                        name="email"
                        type="email"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"E-mail"}
                        pattern={{
                           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                           message: "Email inválido",
                        }}
                        watch={watch("credential")}
                     />

                     <CustomInput
                        register={register}
                        name="password"
                        type="password"
                        required={"Preencha esse campo"}
                        errors={errors.credential?.message}
                        placeholder={"Senha"}
                        watch={watch("password")}
                     />
                  </div>

                  <span>Esqueci minha senha</span>
               </div>

               <button onClick={handleSubmit(handleSend)} className="lgn-pgn-btn">
                  Entrar
               </button>

               <p>
                  Não tem uma conta? <span>Registre-se</span>
               </p>

               <div className="lgn-pg-fakeLine">
                  <span />
               </div>

               <div className="lgn-pg-gthb">
                  <span>Ou entre com</span>
                  <button>
                     <Icon.GithubLogo />
                     <p>Github</p>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
