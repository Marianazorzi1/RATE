import React from "react";
import "../../../../rate_projeto/css/atores.css";
import Header from "../components/Header";
import LateralBar from "../components/LateralBar";

const Atores = () => {
  return (
    <div lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RATE - Atores</title>
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
      </head>

      <main>
        <Header />
        <section className="blocos_atores">
          <div className="info_ator">
            <div className="atores">
              <h1>Atores:</h1>
            </div>
            <div className="card_blocos">
              {Array.from({ length: 30 }).map((_, index) => (
                <a href="class_ator.html" key={index}>
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

export default Atores;
