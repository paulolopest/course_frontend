import React from "react";
import "./../../../Styles/Pages/Home/components/Dashboard.scss";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import * as Icon from "@phosphor-icons/react";

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

const Dashboard = () => {
   return (
      <div className="dsbd-pg">
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
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
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
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
                           <span>Explorer</span>
                        </div>
                     </div>
                     <div>
                        <p>36 pontos</p>
                     </div>
                  </div>

                  <div className="dsbd-pg-mn-box-card">
                     <div className="dbsd-box-card-info">
                        <p className="cd-info-pfl">
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
                           <span>Explorer</span>
                        </div>
                     </div>
                     <div>
                        <p>36 pontos</p>
                     </div>
                  </div>
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
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
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
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
                           <span>Explorer</span>
                        </div>
                     </div>
                     <div>
                        <p>36 pontos</p>
                     </div>
                  </div>

                  <div className="dsbd-pg-mn-box-card">
                     <div className="dbsd-box-card-info">
                        <p className="cd-info-pfl">
                           Y<span>1</span>
                        </p>

                        <div>
                           <p>Yasmin Conc</p>
                           <span>Explorer</span>
                        </div>
                     </div>
                     <div>
                        <p>36 pontos</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
