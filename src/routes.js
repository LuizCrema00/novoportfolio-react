import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Formacoes from "componentes/Formacoes";


function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
          <Route path="formacoes" element={<Formacoes />} />
        </Route>
        <Route path="*" element={<div>Página nao encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
