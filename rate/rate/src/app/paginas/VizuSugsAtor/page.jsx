import React from "react";
import "./vizu_sugs_ator.css";
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "@/app/components/LateralBar";

const VizuSugsAtor = () => {

  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_filmes">
          <div className="seta_voltar">
            <button className="bac-button">&#8592;</button>
          </div>
          <div className="movie-details">
            <div className="part1">
              <h1 className="movi-name">Nome do filme</h1>
              <div className="movie-image">
                <div className="postera-frame"></div>
              </div>
            </div>
            <div className="parte2">
              <p className="nam">Nome:</p>
              <p className="nam">Idade:</p>
              <p className="nam">Nascimento:</p>
              
            </div>
            <div className="parte3">
              <a href="perfil_comen.html">
                <div className="use-card">
                  <div className="profile-icon">
                    <img className="perfil" src="img/Perfil.png" alt="Ícone de usuário" />
                  </div>
                  <span className="username">@fulanotany</span>
                </div>
              </a>
              <div className="avaliacao">
                <button className="ok">
                  <span className="likes">0 </span>
                  <i className="fas fa-thumbs-up"></i>
                </button>
                <button className="nok">
                  <span className="likes">0 </span>
                  <i className="fas fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <LateralBar/>
        </section>
      </main>
    </div>
  );
};

export default VizuSugsAtor;

