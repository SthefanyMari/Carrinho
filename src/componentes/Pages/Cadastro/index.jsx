
import React from "react";
import "./cadastro.css"

export default function Cadastro() {
    return (

        <div className="cadastro-container">
        <div className="cadastro-form">
          <h1 className="titulo">Cadastro</h1>
          <p>Crie sua conta preenchendo os campos abaixo.</p>
  
          <form>
            <label>Nome completo</label>
            <input type="text" placeholder="João da Silva" required />
  
            <label>Email</label>
            <input type="email" placeholder="joao@123.com" required />
  
            <label>Senha</label>
            <input type="password" placeholder="******" required />
  
            <label>Confirmar Senha</label>
            <input type="password" placeholder="******" required />
  
            <button type="submit" className="btn roxo">Cadastrar</button>
            <button type="button" className="btn branco">Voltar ao Login</button>
          </form>
  
          <p style={{ textAlign: "center", marginTop: 20 }}>Ou cadastre-se com</p>
          <div className="redes">
            {["Facebook", "LinkedIn", "Google"].map((rede) => (
              <a key={rede} href="#">{rede}</a>
            ))}
          </div>
        </div>
  
        <div className="cadastro-img">
          <nav>
            <a href="#" className="active">Home</a>
            {["Sobre", "Contatos", "Planos"].map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
          </nav>
          <img src="/compras_espelhada_final.png" alt="Sacolas" />
        </div>
      </div>
    )
}