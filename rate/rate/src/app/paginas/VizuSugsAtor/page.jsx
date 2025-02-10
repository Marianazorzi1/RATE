import React from 'react';
import './vizu_sugs_ator.css'; 
import Header from '@/app/components/Header';
import LateralBar from '@/app/components/LateralBar';

const VizuSugsAtor = () => {
  return (
    <div>
      <Header/>

      <main>
        <section className="bloco-atores">
          <div className="botao-voltar">
            <button className="botao-retorno">
              &#8592;
            </button>
          </div>
          <div className="detalhes-ator">
            <div className="parte1">
              <h1 className="nome-ator">Nome do ator</h1>
              <div className="imagem-ator">
                <div className="moldura-cartaz"></div>
              </div>
            </div>
            <div className="parte2">
              <p className="info-ator">
                <strong>Nome:</strong>
              </p>
              <p className="info-ator">
                <strong>Idade:</strong>
              </p>
              <p className="info-ator">
                <strong>Nascimento:</strong>
              </p>
            </div>
            <div className="parte3">
              <a href="perfil_comen.html">
                <div className="cartao-usuario">
                  <div className="icone-perfil">
                    <img className="imagem-perfil" src="img/Perfil.png" alt="Imagem do ícone de usuário" />
                  </div>
                  <span className="nome-usuario">@fulanotany</span>
                </div>
              </a>
              <div className="avaliacao">
                <button className="botao-like">
                  <span className="numero-likes">0 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                    <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
                  </svg>
                </button>
                <button className="botao-dislike">
                  <span className="numero-likes">0 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                    <path d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649-.063.293V14a2 2 0 0 0 2 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <LateralBar/>
        </section>
      </main>

      <script src="script.js"></script>
    </div>
  );
};

export default VizuSugsAtor;
