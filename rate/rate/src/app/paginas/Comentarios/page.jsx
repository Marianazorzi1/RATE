import React from "react";
import Header from "@/app/components/Header";
import './cometarios.css';
import LateralBar from "@/app/components/LateralBar";

const RateComentarios = () => {
  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_filmes">
          <div className="card_buttons">
            <button id="btn_modificar">Modificar</button>
            <button id="btn_remover">Remover</button>
          </div>
          <div className="info_comen">
            <div className="comen_pes">
              <h1>Comentários pessoais: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(8)].map((_, index) => (
                <div className="bloco" key={index}>
                  <div className="img_comen">
                    <a href="perfil_comen.html">
                      <img className="perfil" src="img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className="blocos_int">
                    <p>Comentário bem útil</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="comen_amigos">
              <h1>Comentários de amizades: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(8)].map((_, index) => (
                <div className="bloco" key={index}>
                  <div className="img_comen">
                    <a href="perfil_comen.html">
                      <img className="perfil" src="img/Perfil.png" alt="Perfil" />
                    </a>
                  </div>
                  <div className="blocos_int">
                    <p>Comentário bem útil</p>
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

export default RateComentarios;
