import React from 'react';
import '../../paginas/PagInicialLogin/inicial_login.css';
import Header from '../../components/Header';
import LateralBar from '../../components/LateralBar';

const App = () => {
  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_filmes">
          <div className="card_login">
            <a href="login.html">
              <button id="btn_login">Login</button>
            </a>
          </div>
          <div className="info_inicio">
            <div className="tit_film">
              <h1>Filmes: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(14)].map((_, index) => (
                <div className="blocos" key={index}></div>
              ))}
            </div>
            <div className="tit_ator">
              <h1>Atores: </h1>
            </div>
            <div className="card_blocos">
              {[...Array(14)].map((_, index) => (
                <div className="blocos" key={index}></div>
              ))}
            </div>
          </div>
        </section>

        <LateralBar/>
      </main>
    </div>
  );
};

export default App;
