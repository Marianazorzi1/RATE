// import React from 'react';
// import '@/app/inicial_login.css';
// // import Header from '../../components/Header';
// // import LateralBar from '../../components/LateralBar';

// const App = () => {
//   return (
//     <div>
//       {/* <Header /> */}

//       <main>
//         <section className="blocos_filmes">
//           <div className="card_login">
//             <a href="login.html">
//               <button id="btn_login">Login</button>
//             </a>
//           </div>
//           <div className="info_inicio">
//             <div className="tit_film">
//               <h1>Filmes: </h1>
//             </div>
//             <div className="card_blocos">
//               {[...Array(7)].map((_, index) => (
//                 <a key={index} href={`genero_${index}.html`}>
//                   <div className="blocos"></div>
//                 </a>
//               ))}

//             </div>
//             <div className="tit_ator">
//               <h1>Atores: </h1>
//             </div>
//             <div className="card_blocos">
//               {[...Array(14)].map((_, index) => (
//                 <a key={index} href={`genero_${index}.html`}>
//                   <div className="blocos"></div>
//                 </a>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* <LateralBar /> */}
//       </main>
//     </div>
//   );
// };

// export default App;

import FilmesADM from "./paginas/FilmesADM/page.jsx"; 
import AtoresADM from "./paginas/AtoresADM/page.jsx";
import GenerosADM from "./paginas/GenerosADM/page.jsx";
import Generos from "./paginas/Generos/page.jsx";
import Favoritos from "./paginas/Favoritos/page.jsx";
import Atores from "./paginas/Atores/page.jsx";
import PaginaInicialLogin from "./paginas/PagInicialLogin/page.jsx";
import SugsFilm from "./paginas/SugsFilm/page.jsx";
import ModsSugsFilm from "./paginas/ModSugsFilm/page.jsx";
import ModsSugsAtor from "./paginas/ModSugsAtor/page.jsx";
import Perfil from "./paginas/Perfil/page.jsx";
import PerfilComen from "./paginas/PerfilComen/page.jsx";
import PerfilAmg from "./paginas/PerfilAmg/page.jsx";
import Comentarios from "./paginas/Comentarios/page.jsx";
import AdcSugsAtor from "./paginas/AdcSugsAtor/page.jsx";
import AdcAtor from "./paginas/AdcAtor/page.jsx";
import AdcGenero from "./paginas/AdcGenero/page.jsx";
import AdcSugsFilmADM from "./paginas/AdcSugsFilmeADM/page.jsx";
import AdcFilm from "./paginas/AdcFilme/page.jsx";
import ClassificacaoAtor from "./paginas/ClassificacaoAtor/page.jsx";
import ClassificacaoAtorADM from "./paginas/ClassificacaoAtorADM/page.jsx";
import VizuSugsAtor from "./paginas/VizuSugsAtor/page.jsx";
import Sugestao from "./paginas/PgnSugestoes/page.jsx";
import SugestaoAdm from "./paginas/PgnSugestoesAdm/page.jsx";
import Filmes from "./paginas/PgnFilmes/page.jsx";
import Inicial from "./paginas/PgnInicial/page.jsx";
import Amigos from "./paginas/Amigos/page.jsx";
import VisualizarSugestaoFilme from "./paginas/VizuSugsFilm/page.jsx";
import VizuSugsADM from "./paginas/VizuSugsADM/page.jsx";
import VizuMinSugs from "./paginas/VizuMinSugs/page.jsx";
import MinSugestao from "./paginas/PgnMinhasSugestoes/page.jsx";
import ClassFilm from "./paginas/ClassFilm/page.jsx";
import ClassFilmADM from "./paginas/ClassFilmADM/page.jsx";
import CriarConta from "./paginas/CriarConta1/page.jsx";
import CriarConta2 from "./paginas/CriarConta2/page.jsx";
import CriarConta3 from "./paginas/CriarConta3/page.jsx";
import Login from "./paginas/Login/page.jsx";
import RedefinirSenha1 from "./paginas/RedefSenha1/page.jsx";
import RedefinirSenha2 from "./paginas/RedefSenha2/page.jsx";
import RedefinirSenha3 from "./paginas/RedefSenha3/page.jsx";

export default function Home() {
  return (
    <div>
      <main>
        
        <FilmesADM />
        {/* <AtoresADM /> */}
        {/* <Generos/> */}
        {/* <GenerosADM/> */}
        {/* <Favoritos/> */}
        {/* <Atores/> */}
        {/* <PaginaInicialLogin/> */}
        {/* <SugsFilm/> */}
        {/* <ModsSugsFilm/> */}
        {/* <ModsSugsAtor/> */}
        {/* <Perfil/> */}
        {/* <PerfilComen /> */}
        {/* <PerfilAmg /> */}
        {/* <Comentarios/> */}
        {/* <AdcSugsAtor/> */}
        {/* <AdcAtor/> */}
        {/* <AdcGenero/> */}
        {/* <AdcSugsFilmADM/> */}
        {/* <AdcFilm/> */}
        {/* <ClassificacaoAtor /> */}
        {/* <ClassificacaoAtorADM/> */}
        {/* <VizuSugsAtor/> */}
        {/* <Sugestao/> */}
        {/* <SugestaoAdm/> */}
        {/* <Filmes/> */}
        {/* <Inicial/> */}
        {/* <Amigos/> */}
        {/* <VisualizarSugestaoFilme/> */}
        {/* <VizuSugsADM/> */}
        {/* <VizuMinSugs/> */}
        {/* <MinSugestao/> */}
        {/* <ClassFilm/> */}
        {/* <ClassFilmADM/> */}
        {/* <CriarConta/> */}
        {/* <CriarConta2/> */}
        {/* <CriarConta3/> */}
        {/* <Login/> */}
        {/* <RedefinirSenha1/> */}
        {/* <RedefinirSenha2/> */}
        {/* <RedefinirSenha3/> */}


        

        
      </main>
    </div>
  );
}

