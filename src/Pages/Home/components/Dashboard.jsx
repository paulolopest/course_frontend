import React, { useEffect } from "react";
import "./../../../Styles/Pages/Home/components/Dashboard.scss";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import * as Icon from "@phosphor-icons/react";
import useAxios from "../../../Hooks/useAxios";
import { ProfessorRequest } from "../../../Requests/ProfessorRequest";
import { CourseRequest } from "../../../Requests/CourseRequest";

const data = [
   {
      name: "Total de alunos",
      uv: 150,
      pv: 4800,
      fill: "#8234e9",
   },
   {
      name: "Máximo de alunos",
      uv: 200,
      pv: 4800,
      fill: "#b35009",
   },
];
const style = {
   lineHeight: "24px",
};

const PR = new ProfessorRequest();
const CR = new CourseRequest();

const Dashboard = () => {
   const professor = useAxios();
   const course = useAxios();

   useEffect(() => {
      const { url } = PR.GET_ALL_PROFESSORS();

      professor.get(url);
   }, []);

   useEffect(() => {
      const { url } = CR.GET_ALL_COURSES();

      course.get(url);
   }, []);

   if (professor.data && course.data)
      return (
         <div className="dsbd-pg animeDown">
            <div className="dsbd-pg-title">
               <h1>Dashboard</h1>
               <p>Acompanhe os dados gerais de engajamento da plataforma</p>
            </div>

            <div className="dsbd-pg-main">
               <div className="dsbd-pg-mn-graph">
                  <div className="mn-graph-title">
                     <Icon.User />
                     <p>Total de usuários</p>
                  </div>

                  <div>
                     <RadialBarChart
                        width={300}
                        height={300}
                        cx={150}
                        cy={180}
                        innerRadius={60}
                        outerRadius={110}
                        barSize={10}
                        data={data}
                     >
                        <RadialBar
                           minAngle={20}
                           label={{ position: "insideStart", fill: "#fff" }}
                           background
                           clockWise
                           dataKey="uv"
                        />
                        <Legend
                           iconSize={10}
                           width={290}
                           height={270}
                           layout="vertical"
                           verticalAlign="middle"
                           wrapperStyle={style}
                        />
                     </RadialBarChart>
                  </div>
               </div>

               <div className="dsbd-pg-mn-box">
                  <div className="dsbd-pg-mn-box-title">
                     <div>
                        <Icon.Trophy />
                        <p>Ranking dos professores</p>
                     </div>

                     <div className="dsbd-box-title-clbk">
                        <p>Ver relatórios</p>
                        <Icon.ArrowRight />
                     </div>
                  </div>

                  <div className="dsbd-pg-mn-box-cd-ctr">
                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {professor.data[0].name.charAt(0)}
                              <span>1</span>
                           </p>

                           <div>
                              <p>
                                 {professor.data[0].name} {professor.data[0].lastname}
                              </p>
                              <span>Explorer</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>26 cursos</p>
                        </div>
                     </div>

                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {professor.data[1].name.charAt(0)}
                              <span>2</span>
                           </p>

                           <div>
                              <p>
                                 {professor.data[1].name} {professor.data[1].lastname}
                              </p>
                              <span>Explorer</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>20 cursos</p>
                        </div>
                     </div>

                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {professor.data[2].name.charAt(0)}
                              <span>3</span>
                           </p>

                           <div>
                              <p>
                                 {professor.data[2].name} {professor.data[2].lastname}
                              </p>
                              <span>Explorer</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>26 cursos</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="dsbd-pg-mn-box">
                  <div className="dsbd-pg-mn-box-title">
                     <div>
                        <Icon.Trophy />
                        <p>Ranking dos cursos</p>
                     </div>

                     <div className="dsbd-box-title-clbk">
                        <p>Ver relatórios</p>
                        <Icon.ArrowRight />
                     </div>
                  </div>

                  <div className="dsbd-pg-mn-box-cd-ctr">
                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {course.data[0].name.charAt(0)}
                              <span>1</span>
                           </p>

                           <div>
                              <p>
                                 {course.data[0].name} {course.data[0].lastname}
                              </p>
                              <span>Frontend</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>80 aulas</p>
                        </div>
                     </div>

                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {course.data[1].name.charAt(0)}
                              <span>2</span>
                           </p>

                           <div>
                              <p>
                                 {course.data[1].name} {course.data[1].lastname}
                              </p>
                              <span>Frontend</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>40 aulas</p>
                        </div>
                     </div>

                     <div className="dsbd-pg-mn-box-card">
                        <div className="dbsd-box-card-info">
                           <p className="cd-info-pfl">
                              {course.data[2].name.charAt(0)}
                              <span>3</span>
                           </p>

                           <div>
                              <p>
                                 {course.data[2].name} {course.data[2].lastname}
                              </p>
                              <span>Web</span>
                           </div>
                        </div>

                        <div className="dbsd-box-card-extra">
                           <p>20 aulas</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
};

export default Dashboard;
