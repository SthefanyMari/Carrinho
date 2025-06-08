import { Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login/login";
import Produtos from "../Pages/Produto";
import PrivateRoute from "./privateRoute";
import CriarProdutoPage from "../Pages/CriarTeste";
import EditarProduto from "../Pages/Editar";


export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto" element={<Produtos/>} />

         <Route
        path="/produtos/criar"
        element={
          <PrivateRoute>
            <CriarProdutoPage />
          </PrivateRoute>
        }
      />

       <Route
        path="/produtos/editar"
        element={
          <PrivateRoute>
            <EditarProduto />
          </PrivateRoute>
        }
      />

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


