import Header from "../../components/Header";
import "./vizu_mi_sugs.css"; 
import LateralBar from "../../components/LateralBar";


const MinSugestao = () => {


  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_sugs">
          <div className="card_sug">
            <a href="minhas_sugestoes.html">
              <button id="btn_mi_sugs">ADICIONAR +</button>
            </a>
          </div>

          <div className="info_sug">
            <div className="sugestoes">
              <h1>Minhas Sugestões:</h1>
            </div>

            <div className="card_blocos">
              {Array.from({ length: 14 }).map((_, index) => (
                <a key={index} href="sugs_filme.html">
                  <div className="blocos">
                    <h1 className="titulo">Os Vingadores</h1>
                    <div className="bloco2"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
        <LateralBar />
        </section>
      </main>
    </div>
  );
};

export default MinSugestao;
