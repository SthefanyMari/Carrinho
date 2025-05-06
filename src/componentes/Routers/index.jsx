
import React from "react";
import{ Routes, Route } from "react-router";
import Produto from "../Pages/produto";

import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login/login";

export default function Routers(){
    return(
        <Routes> 
            <Route path="/" element={<Produto/>} />
            <Route path="/produtos" element={<h1>Produtos</h1>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
    )
   
}
