import React from "react";
import "./class_ator_ADM.css";
import Header from "@/app/components/Header";
import LateralBar from "@/app/components/LateralBar";

const ClassificacaoAtor = () => {
  return (
    <>
      <Header/>
      
      <main>
        <section className="secao_ator">
          <div className="area_botoes">
            <div className="botao_voltar">
              <button className="botao_voltar_icon">&#8592;</button>
            </div>
           
          </div>
          <div className="info_ator">
            <div className="dados_ator">
                <h1>Nome do ator: </h1>
              <div className="imagem_ator">
                <img src="./" alt="" />
              </div>
              <div className="texto_ator">
                
                <p><strong>Idade:</strong> 35 anos</p>
                <p><strong>Nascimento:</strong> 10 de março de 1988</p>
              </div>
              <div className="mod_remov_button">
                <div className="remover">
                  <button className="remove_button">Remover</button>
                </div>
                <a href="mod_sugs_ator.html">
                  <div className="modificar">
                    <button className="mod_button">Modificar</button>
                  </div>
                </a>
              </div>
            </div>
            <div className="secao_filmes">
              <h2>Filmes:</h2>
              <div className="area_filmes">
                {[...Array(8)].map((_, index) => (
                  <a key={index} href="class_filmes.html">
                    <div className="bloco_filme"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <LateralBar/>
        </section>
      </main>
    </>
  );
};

export default ClassificacaoAtor;
