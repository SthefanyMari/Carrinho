import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/cadastro";

import Produtos from "../pages/produto";
import PrivateRoute from "./privateRoute";
import Login from "../Pages/Login/login";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Produtos />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  );
}


