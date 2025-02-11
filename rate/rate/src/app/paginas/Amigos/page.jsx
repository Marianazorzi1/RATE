import React from "react";
import Header from "@/app/components/Header";
import './amigos.css';
import LateralBar from "@/app/components/LateralBar";

const Comentarios = () => {
  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_amgs">
          
          <div className="info_comen">
            <div className="comen_pes">
              <h1>Amigos: </h1>
            </div>
            <div className="card_blo">
              {[...Array(12)].map((_, index) => (
                <div className="bloco" key={index}>
                  <div className="img_come">
                    <a href="perfil_comen.html">
                      <img className="perfil" src="img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className="blocos_in">
                    <p className="just">@JustinBieber</p>
                    <div className="div_button">
                    <a href="perfil_amg.html">
                      <button className="vizu_amg">Visualizar perfil</button>
                    </a>
                    <button className="rem_amg">Remover amigo</button>
                  </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </section>
        <LateralBar/>
      </main>
    </div>
  );
};

export default Comentarios;
