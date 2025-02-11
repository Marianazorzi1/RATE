import React from 'react';
import '../../paginas/PgnInicial/inicial.css';
import Header from '../../components/Header';
import LateralBar from '../../components/LateralBar';

const Inicial = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="blocos_filmes">
          {/* <div className="card_login">
            <a href="login.html">
              <button id="btn_login">Login</button>
            </a>
          </div> */}
          <div className="info_inicio">
            <div className="tit_film">
              <h1>Filmes: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(7)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
                  <div className="blocos"></div>
                </a>
              ))}

            </div>
            <div className="tit_ator">
              <h1>Atores: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(14)].map((_, index) => (
                <a key={index} href={`genero_${index}.html`}>
                  <div className="blocos"></div>
                </a>
              ))}

            </div>
          </div>
        </section>

        <LateralBar />
      </main>
    </div>
  );
};

export default Inicial;