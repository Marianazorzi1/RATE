import Header from "../../components/header/Header";
import "./vizu_sugs_ADM.css"; 
import LateralBar from "../../components/LateralBar";


const SugestaoAdm = () => {


  return (
    <div>
      <Header/>

      <main>
        <section className="blocos_sugs">

          <div className="info_sug">
            <div className="sugestoes">
              <h1>Sugestões:</h1>
            </div>

            <div className="card_blocos">
              {Array.from({ length: 20 }).map((_, index) => (
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

export default SugestaoAdm;
