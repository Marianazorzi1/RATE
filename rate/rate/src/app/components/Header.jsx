// components/Header.jsx
import React from 'react';
import Image from 'next/image'; 

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="cor1">
          <h1 className="rate">RATE</h1>
          <h2 className="movie">MOVIE REVIEW</h2>
        </div>
        <div className="cinzacl"></div>
        <div className="cinzaes">
          <i className="fas fa-search" id="lupa"></i>
        </div>
        <div className="preto">
          <div className="botoes_perfil">
            <button>
              <Image
                id="sino"
                src="/img/notificacao.png" 
                alt="Sino de notificação"
                width={24} 
                height={24} 
              />
            </button>
            <button>
              <a href="amigos.html">
                <Image
                  id="tres"
                  src="/img/amigos.png" 
                  alt="Ícone de amigos"
                  width={24}
                  height={24}
                />
              </a>
            </button>
            <button>
              <a href="perfil.html">
                <Image
                  id="perfil"
                  src="https://img.icons8.com/?size=100&id=85147&format=png&color=737373" 
                  alt="Ícone de perfil"
                  width={24}
                  height={24}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
