import React, { useContext, useEffect } from "react";
import * as Icon from "@phosphor-icons/react";
import "./../../../Styles/Pages/Home/components/Courses.scss";
import { CourseRequest } from "../../../Requests/CourseRequest";
import useAxios from "./../../../Hooks/useAxios";
import { icons } from "../../../Utils/Function";
import { GlobalContext } from "../../../Context/GlobalContext";

const CR = new CourseRequest();

const Courses = () => {
   const { addCourseModal, setAddCourseModal } = useContext(GlobalContext);

   const { get, data } = useAxios();

   useEffect(() => {
      const { url } = CR.GET_ALL_COURSES();

      get(url);
   }, [addCourseModal]);

   console.log(data);

   const formationFilter = data?.filter((crs) => crs.category === "Formação");
   const formationMap = formationFilter?.map((crs) => (
      <div className="crs-pg-main-crssl-card">
         <div className="crssl-cd-lg">
            <Icon.GithubLogo />
         </div>

         <div className="crssl-cd-tp">
            <p>{crs.category}</p>
            <span />
            <p>100h</p>
         </div>

         <h3>{crs.name}</h3>

         <div className="crssl-cd-extra">
            <div>
               <Icon.CellSignalMedium />
               <p>{crs.difficulty}</p>
            </div>

            <span>{crs.programming_language}</span>
         </div>
      </div>
   ));

   const courseFilter = data?.filter((crs) => crs.category === "Cursos");
   const courseMap = courseFilter?.map((crs) => (
      <div className="crs-pg-main-crssl-card">
         <div className="crssl-cd-lg">
            <Icon.GithubLogo />
         </div>

         <div className="crssl-cd-tp">
            <p>{crs.category}</p>
            <span />
            <p>100h</p>
         </div>

         <h3>{crs.name}</h3>

         <div className="crssl-cd-extra">
            <div>
               <Icon.CellSignalMedium />
               <p>{crs.difficulty}</p>
            </div>

            <span>{crs.programming_language}</span>
         </div>
      </div>
   ));

   const eventFilter = data?.filter((crs) => crs.category === "Eventos");
   const eventMap = eventFilter?.map((crs) => (
      <div className="crs-pg-main-crssl-card">
         <div className="crssl-cd-lg">
            <Icon.GithubLogo />
         </div>

         <div className="crssl-cd-tp">
            <p>{crs.category}</p>
            <span />
            <p>100h</p>
         </div>

         <h3>{crs.name}</h3>

         <div className="crssl-cd-extra">
            <div>
               <Icon.CellSignalMedium />
               <p>{crs.difficulty}</p>
            </div>

            <span>{crs.programming_language}</span>
         </div>
      </div>
   ));

   return (
      <div className="crs-pg animeUp">
         <div className="crs-pg-title">
            <div>
               <h1>Professores</h1>
               <p>Gerencie os usuários da plataforma</p>
            </div>

            <button onClick={() => setAddCourseModal(true)}>
               <Icon.Plus />
               <p>Novo curso</p>
            </button>
         </div>

         <div className="crs-pg-main">
            <div className="crs-pg-main-ctr">
               <div className="crs-pg-main-crssl-ctr animeUp">
                  <div className="crs-crssl-title">
                     <h2>Formações</h2>
                     <div>
                        <p>Ver tudo</p>
                        <Icon.ArrowRight />
                     </div>
                  </div>

                  <div className="crs-pg-main-crssl animeUp">{formationMap}</div>
               </div>

               <div className="crs-pg-main-crssl-ctr animeUp">
                  <div className="crs-crssl-title">
                     <h2>Cursos</h2>
                     <div>
                        <p>Ver tudo</p>
                        <Icon.ArrowRight />
                     </div>
                  </div>

                  <div className="crs-pg-main-crssl animeUp">{courseMap}</div>
               </div>

               <div className="crs-pg-main-crssl-ctr animeUp">
                  <div className="crs-crssl-title">
                     <h2>Eventos</h2>
                     <div>
                        <p>Ver tudo</p>
                        <Icon.ArrowRight />
                     </div>
                  </div>

                  <div className="crs-pg-main-crssl animeUp">{eventMap}</div>
               </div>
            </div>

            <div className="crs-pg-main-filter">
               <h2>Filtre o catálogo</h2>

               <div className="crs-pg-mn-flt-ctr">
                  <span>Tipo de conteúdo</span>

                  <div>
                     <input type="checkbox" />
                     <p>Curso</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Formação</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Evento</p>
                  </div>
               </div>
               <div className="crs-pg-mn-flt-ctr">
                  <span>Nível de habilidade</span>

                  <div>
                     <input type="checkbox" />
                     <p>Iniciante</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Intermediário</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Avançado</p>
                  </div>
               </div>
               <div className="crs-pg-mn-flt-ctr">
                  <span>Competência</span>

                  <div>
                     <input type="checkbox" />
                     <p>Frontend</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Backend</p>
                  </div>
                  <div>
                     <input type="checkbox" />
                     <p>Mobile</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Courses;
