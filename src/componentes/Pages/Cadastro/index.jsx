import React, { useState } from "react";
import "./cadastro.css";

export default function Cadastro() {
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  const [planoSelecionado, setPlanoSelecionado] = useState(null);

  const renderSecao = () => {
    switch (secaoAtiva) {
      case "home":
        return (
          <p>
            Bem-vindo a página inicial da EasyCart, seu destino confiável para
            compras online. Nossa plataforma foi desenvolvida para oferecer uma
            experiência rápida, segura e fácil de usar, combinando tecnologia
            moderna com simplicidade.
          </p>
        );
      case "sobre":
        return (
          <p>
            Na EasyCart, queremos que você tenha uma experiência de compra rápida.
            O site foi criado para ser simples. Aqui você encontra produtos de
            tecnologia, organizados de forma clara para facilitar sua escolha. A
            plataforma foi cuidadosamente desenvolvida pela nossa programadora,
            que enfrenta diariamente o desafio de lidar com códigos que parecem
            nunca ficarem certos, sempre tem alguma coisa para ajustar ou refazer.
            Quando seu superior (o professor) passa uma nova tarefa, parece que o
            código dela e as instruções dele não fazem sentido, e ela acaba morrendo
            aos poucos nessa luta para lançar o site (passar na matéria). Mas é essa
            dedicação que garante que o site funcione do jeito que você e ele
            esperam!(ou não)
            </p>
        );
      case "contatos":
        return (
          <p>
            Tem alguma dúvida, sugestão ou precisa de ajuda? <br />
            Você pode entrar em contato conosco pelo "compras@easycart.com" ou pelo
            telefone (67) 99939-5539. <br />
            Vamos responder o mais rápido possível. Obrigada.
          </p>
        );
      case "planos":
        return (
          <div>
            <p>Confira nossos planos:</p>
            {[
              { nome: "Básico", preco: "R$ 29,90" },
              { nome: "Plus", preco: "R$ 59,90" },
              { nome: "Premium", preco: "R$ 99,90" },
            ].map((plano) => (
              <div
                key={plano.nome}
                className={`plano ${planoSelecionado === plano.nome ? "ativo" : ""}`}
                onClick={() => setPlanoSelecionado(plano.nome)}
              >
                <strong>{plano.nome}</strong> - {plano.preco}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cadastro-wrapper">
      <div className="formulario">
        <h1>Cadastro</h1>
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

      <div className="informacoes">
        <nav className="navegacao">
          {["home", "sobre", "contatos", "planos"].map((secao) => (
            <a
              key={secao}
              href="#"
              onClick={() => {
                setSecaoAtiva(secao);
                setPlanoSelecionado(null);
              }}
              className={secaoAtiva === secao ? "ativo" : ""}
            >
              {secao.charAt(0).toUpperCase() + secao.slice(1)}
            </a>
          ))}
        </nav>
        <div className="conteudo-secao">
          {renderSecao()}
        </div>
      </div>
    </div>
  );
}
