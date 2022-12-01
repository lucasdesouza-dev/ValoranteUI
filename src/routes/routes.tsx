import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Agentes from "../Pages/Agentes/Agentes";
import AgentesDetalhesPage from "../Pages/Agentes/AgentesDetalhesPage ";
import Armas from "../Pages/Armas/Armas";
import ArmasDetalhesPage from "../Pages/Armas/ArmasDetalhesPage ";

import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import  Mapas  from '../Pages/Mapas/Mapas';
import MapasDetalhesPage from '../Pages/Mapas/MapasDetalhesPage ';
import Registrar from '../Pages/Registro/Registrar';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='login' element={<Login/>} />
          <Route path='registrar' element={<Registrar/>} />
          <Route path="/" element={<Home />} />
          <Route path="agentes" element={<Agentes />} />
          <Route path="agentes/:id" element={<AgentesDetalhesPage />} />
          <Route path="armas" element={<Armas />} />
          <Route path="armas/:id" element={<ArmasDetalhesPage />} />
          <Route path="mapas" element={<Mapas />} />
          <Route path="mapas/:id" element={<MapasDetalhesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
