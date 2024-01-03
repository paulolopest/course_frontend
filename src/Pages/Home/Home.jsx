import React from "react";
import "./../../Styles/Pages/HomePage.scss";
import CustomSkeleton from "../../Components/CustomSkeleton/CustomSkeleton";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Professor from "./components/Professor";

const Home = () => {
   return (
      <div>
         <CustomSkeleton>
            <div className="homePg">
               <div className="home-ctr">
                  <Routes>
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/cursos" element={<Courses />} />
                     <Route path="/professores" element={<Professor />} />
                  </Routes>
               </div>
            </div>
         </CustomSkeleton>
      </div>
   );
};

export default Home;
