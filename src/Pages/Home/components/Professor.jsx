import React from "react";
import * as Icon from "@phosphor-icons/react";
import "./../../../Styles/Pages/Home/components/Professor.scss";

const Professor = () => {
   return (
      <div className="pfs-pg animeUp">
         <div className="pfs-pg-title">
            <div>
               <h1>Professores</h1>
               <p>Gerencie os usuários da plataforma</p>
            </div>

            <button>
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

            <div className="pfs-pg-pfs-ctr">
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
               <div className="pfs-pg-pfs-ctr-cd">
                  <div className="pfs-ctr-cd-user">
                     <span>P</span>
                     <p>Paulo Lopes</p>
                  </div>

                  <p>paulo@gmail.com</p>

                  <div>
                     <p>Owner</p>
                  </div>

                  <button>
                     <Icon.DotsThreeVertical />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Professor;
