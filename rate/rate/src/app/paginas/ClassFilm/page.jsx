import React from "react";
// import "./class_filme.css";
import Header from "@/app/components/Header";
import LateralBar from "@/app/components/LateralBar";

const ClassFilm = () => {
    return (
        <><style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Macondo&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:wght@253&family=Nerko+One&family=Protest+Guerrilla&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #474747;
}



/* Barra lateral */
.lateral_bar {
    position: fixed;
    top: 0;
    height: 100%;
    width: 5%;
    min-height: 40%;
    background-color: #52057b;
    display: flex;
    justify-items: center;
    align-items: center;
}

.nav_botoes_lateral {
    height: 80%;
    width: 100%;
    padding-top: 20%;
    gap: 40%;
    display: flex;
    justify-self: center;
    align-self: center;
    flex-direction: column;
}

.botoes_acima {
    height: 50%;
    display: flex;
    gap: 2%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.botoes {
    justify-self: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-top: 100%;
    margin-bottom: -62%;
}

.ultimo_botao {
    justify-self: center;
    align-self: center;
}

/* Cabeçalho */
.header{
    width: 100%;
    height: 8vh;
    min-height: 4vh;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    right: 0;
}

.cor1{
    background-color: #52057b;
    height: 7vh;
    min-height: 70px;
    width: 23.75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.rate {
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    color: aliceblue;
    font-size: 28px;
    margin-left: 7%;
}

.movie  {
    color: aliceblue;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    margin-left: 12%;
}        

.cinzacl{
    background-color: #737373;
    height: 7vh;
    min-height: 70px;
    width: 23.75%;
    /* position: fixed; */
}

.cinzaes{
    background-color: #545454;
    height: 7vh;
    min-height: 70px;
    width: 23.75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#lupa{
    width: 80%;
    margin-left: 6%;
    margin-right: 14%;
    font-size: 28px;
}


.preto{
    background-color: #000000;
    height: 7vh;
    min-height: 70px;
    width: 23.75%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.botoes_perfil {
    width: 80%;
    height: 7vh;
    margin-left: 12%;
    margin-right: 8%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
}

.botoes_perfil button {
    background-color: #000000;
    border: 0;
}

.botoes_perfil img {
    height: 40px;
    width: 40px;
}

/* Blocos */
.filminho {
    padding-top: 122px;
    padding-left: 10%;
    padding-right: 5%;
    padding-bottom: 3%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 3vh ;
    width: 100%;
}

.seta_volta {
    position: fixed;
    width: 50%;
    margin-left: -3%;
    margin-top: -2%;
}

.black-button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    /* margin-right: 20%; */
    margin-left: -70%;
    margin-top: -3%;
}

.back-button:hover {
    color: #ccc;
}

.informacao {
    margin-top: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.mov-info {
    width: 50%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    gap: 4vh;
}

.detalhes {
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.part1 {
    width: max-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2vh;
}

.par2 {
    width: max-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2vh;
    margin-left: -20%;
    margin-top: -40%;
 
}


.movie-titulo {
    font-size: 28px;
    font-family: "Montserrat", sans-serif;
    color: #FFF;
    margin-left: -220%;
}

.movie-ava {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.rating-strela {
    font-size: 20px;
    color: gold;
    margin-left: -1000%;
}

.rating-valor {
    font-size: 18px;
    color: white;
}

.mov-text {
    color: #FFF;
    font-family: "Montserrat", sans-serif;
    margin-left: -280%;
    margin-top: 70%;
}

.mov-text p {
    margin: 5px 0;
}

.movi-imag {
    width: 14vw;
    height: 40vh;
    background-color: #5c5c5c;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    margin-left: -220%;
    
}

.livr {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 10px;
}

.mod_remov_botao {
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 1%;
    margin-bottom: 2%;
    gap: 1vh;
    bottom: 0;
}

.removerr {
    width: 40%;
    color: white;
    border: none; 
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block; 
    font-size: 16px; 
    margin: 4px 2px; 
    cursor: pointer; 
    border-radius: 25px; 
    margin-top: 90%;
    
}

.modificarr {
    width: 40%;
    color: white;
    border: none; 
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block; 
    font-size: 16px; 
    margin: 4px 2px; 
    cursor: pointer; 
    border-radius: 25px; 
    margin-top: 348%;
    margin-left: 20px;
}

.remove_botao {
    background-color: #B60B0D;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: #FFF;
    margin-top: 310%;
    font-size: 85%;
    margin-left: 80%;
}

.remove_button:hover {
    background-color: #df1013;
}

.mod_button {
    background-color: #737373;
    padding: 10px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: #FFF;
}

.mod_button:hover {
    background-color: #959595;
}

.comments-secao {
    margin-left: 10%;
    width: 40%;
    margin-top: 15px;
    
}

.enviar  {
    background-color: #52057b; 
    color: white;
    border: none; 
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block; 
    font-size: 16px; 
    margin: 4px 2px; 
    cursor: pointer; 
    border-radius: 25px; 
    margin-top: 10px;
    margin: 5%;
  }

.env:hover {
    background-color: #7e198f;
}
  

.comments-section h2 {
    font-size: 20px;
    margin-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;  
    font-size: 22px;
    color: #FFF;
}

.coment {
    border-radius: 15px;       
    padding: 10px;            
    margin-bottom: 15px;      
    background-color: #545454; 
    width: 85%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
    padding-right: 1500%;
}
#adcComen{
    width: 185%;
    height: 45px;
    border-radius: 15px;  
    color: #fff; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
    
}


.likes-count {
    font-size: 16px;
    margin-right: 10px;
}

.like-icon {
    font-size: 20px;
    cursor: pointer;
}

.adicionar-comment input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4a4a4a;
    color: white;
    margin-top: 10px;
    padding-right: 800%;
}

.blocos {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5vh;
}

.movies {
    background-color: #737373;
    height: 32vh;
    width: 10vw;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
}


@media only screen and (min-width: 768px) and (max-width: 959px) {
    .rate {
        font-size: 26px;
    }.movie {
        font-size: 10px;
    }
    #lupa {
        font-size: 26px;
    }
    .botoes_perfil img {
        height: 37px;
        width: 37px;
    }
    .botoes {
        width: 24px;
        height: 24px;
    }
}


@media only screen and (max-width: 767px) {
    .rate{
        font-size: 26px;
    }
    .movie {
        font-size: 10px;
    }
    #lupa {
        font-size: 22px;
    }
    .botoes_perfil img {
        height: 34px;
        width: 34px;
    }
    .botoes {
        width: 24px;
        height: 24px;
    }
}


@media only screen and (min-width: 480px) and (max-width: 767px) {
    .rate {
        font-size: 25px;
    }
    .movie {
        font-size: 9px;
    }
    #lupa {
        font-size: 22px;
    }
    .botoes_perfil img {
        height: 31px;
        width: 31px;
    }
    .botoes {
        width: 18px;
        height: 18px;
    }
}


@media only screen and (max-width: 479px) {
    .rate { 
        font-size: 22px;
    }
    .movie {
        font-size: 8px;
    }
    #lupa {
        font-size: 20px;
    }
    .botoes_perfil img {
        height: 29px;
        width: 29px;
    }
    .botoes {
        width: 25px;
        height: 25px;
    }
}

@media only screen and (max-width: 405px) {
    .lateral_bar {
        display: block;
    }
    .rate {
        font-size: 22px;
    }
    .movie {
        font-size: 8px;
    }
    #lupa {
        font-size: 20px;
    }
    .botoes_perfil img {
        height: 29px;
        width: 29px;
    }
    .botoes {
        width: 25px;
        height: 25px;
    }
}

    
        `}
      </style>
            <Header/>
            <main>
                <section className="filminho">
                    <div className="seta_volta">
                        <button className="black-button">&#8592;</button>
                    </div>
                    <div className="informacao">
                        <div className="mov-info">
                            <div className="detalhes">
                                <div className="part1">
                                    <h1 className="movie-titulo">Nome do filme</h1>
                                    <div className="movie-ava">
                                        <span className="rating-strela">⭐</span>
                                        <span className="rating-valor">4,7</span>
                                    </div>
                                    <div className="movi-imag">
                                        <img  alt="" />
                                    </div>
                                    <div className="par2">
                                    <div className="mov-text">
                                        <p><strong>Data de Lançamento:</strong></p>
                                        <p><strong>Sinopse:</strong></p>
                                        <p><strong>Diretor:</strong></p>
                                        <p><strong>Produtor:</strong></p>
                                        <p><strong>Elenco:</strong></p>
                                        <p><strong>Gênero:</strong></p>
                                        <div className="movie-rating-badge">
                                        <img className="livr" src="img/AL.jpg" alt="Indicação livre" />
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>
                                
                            </div>
                            <div className="comments-secao">
                            <h2>Comentários:</h2>
                            <div className="comment-caixa">
                                {[...Array(5)].map((_, i) => (
                                    <div className="coment" key={i}>
                                        <p>0 👍🏻</p>
                                    </div>
                                ))}
                                <div className="adicionar-comment">
                                    <input type="text" placeholder="Adicionar comentário" id="adcComen" />
                                    <button className="enviar">Enviar</button>
                                </div>
                            </div>
                        </div>
                            <div className="mod_remov_botao">
                                <div className="removerr"><button className="remove_botao">Remover</button></div>
                                <a href="mod_sugs_filme.html">
                                    <div className="modificarr"><button className="mod_button">Modificar</button></div>
                                </a>
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

export default ClassFilm;
