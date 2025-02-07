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

export default function Home() {
  return (
    <div>
      <main>
        
        {/* <FilmesADM /> */}
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
        <AdcFilm/>



        

        
      </main>
    </div>
  );
}

