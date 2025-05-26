import React, { useState } from "react";

export default function Login() {
  const [secaoAtiva, setSecaoAtiva] = useState("home");
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [planoParaPagamento, setPlanoParaPagamento] = useState(null);
  const [pagamentoFeito, setPagamentoFeito] = useState(false);

  const renderSecao = () => {
    switch (secaoAtiva) {
      case "home":
        return (
          <p style={{color: "white"}}>
            Bem-vindo a página inicial da EasyCart, seu destino confiável para
            compras online. Nossa plataforma foi desenvolvida para oferecer uma
            experiência rápida, segura e fácil de usar, combinando tecnologia
            moderna com simplicidade.
          </p>
        );

      case "sobre":
        return (
          <p style={{ color: "white"}}>
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
          <p style={{ color: "white" }}>
            Tem alguma dúvida, sugestão ou precisa de ajuda? <br />
            Você pode entrar em contato conosco pelo "compras@easycart.com" ou pelo
            telefone (67) 99939-5539. <br />
            Vamos responder o mais rápido possível. Obrigada.
          </p>
        );

      case "planos":
        const planos = [
          {
            id: "basico",
            nome: "Plano Básico",
            preco: "R$ 29,90/mês",
            parcelas: "3x de R$ 10,00",
            beneficios:
              "Acesso completo ao catálogo, suporte por e-mail e compras sem complicação.",
          },
          {
            id: "plus",
            nome: "Plano Plus",
            preco: "R$ 59,90/mês",
            parcelas: "6x de R$ 10,00",
            beneficios:
              "Atendimento prioritário, descontos exclusivos e ofertas especiais.",
          },
          {
            id: "premium",
            nome: "Plano Premium",
            preco: "R$ 99,90/mês",
            parcelas: "10x de R$ 9,99",
            beneficios:
              "Suporte 24h, entrega expressa em produtos selecionados e acesso antecipado a promoções.",
          },
        ];

        if (pagamentoFeito) {
          return (
            <p style={{ color: "white", fontSize: 18 }}>
              Obrigada por assinar o plano <strong>{planoParaPagamento}</strong>! 🎉
            </p>
          );
        }

        if (planoParaPagamento) {
          return (
            <div style={{ color: "white" }}>
              <p>
                Escolha a forma de pagamento para o <strong>{planoParaPagamento}</strong>:
              </p>
              <div style={{ marginTop: 10 }}>
                {["Cartão", "Boleto", "Pix"].map((opcao) => (
                  <button
                    key={opcao}
                    onClick={() => setPlanoSelecionado(opcao)}
                    style={{
                      background: "#561fec",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      margin: "5px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    {opcao}
                  </button>
                ))}
              </div>

              {planoSelecionado === "Cartão" && (
                <div style={{ marginTop: 20 }}>
                  <h3>Pagamento com Cartão</h3>
                  <label>Nome no Cartão:</label>
                  <input style={{ width: "100%", marginBottom: 10 }} />
                  <label>Número do Cartão:</label>
                  <input style={{ width: "100%", marginBottom: 10 }} />
                  <label>Validade:</label>
                  <input style={{ width: "100%", marginBottom: 10 }} />
                  <label>CVV:</label>
                  <input style={{ width: "100%", marginBottom: 10 }} />
                  <button
                    onClick={() => setPagamentoFeito(true)}
                    style={{
                      background: "#00c853",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      marginTop: 10,
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Confirmar Pagamento
                  </button>
                </div>
              )}

              {planoSelecionado === "Boleto" && (
                <div style={{ marginTop: 20 }}>
                  <h3>Pagamento com Boleto</h3>
                  <img
                    src="https://features.boletosimples.com.br/uploads/logo.jpg"
                    alt="Boleto"
                    style={{ width: "100%", marginBottom: 10 }}
                  />
                  <button
                    onClick={() => setPagamentoFeito(true)}
                    style={{
                      background: "#00c853",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Confirmar Pagamento
                  </button>
                </div>
              )}

              {planoSelecionado === "Pix" && (
                <div style={{ marginTop: 20 }}>
                  <h3>Pagamento com Pix</h3>
                  <img
                    src="https://afinz.com.br/wp-content/uploads/2022/04/QR_Code_Afinz.png"
                    alt="QR Code Pix"
                    style={{
                      marginBottom: 10,
                      width: "150px",
                      height: "auto"
                    }}
                  />
                  <button
                    onClick={() => setPagamentoFeito(true)}
                    style={{
                      background: "#00c853",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px", 
                    }}
                  >
                    Confirmar Pagamento
                  </button>
                </div>
              )}
            </div>
          );
        }

        return (
          <div>
            <p style={{ color: "white" }}>
              Na EasyCart, acreditamos que cada cliente merece um plano que combine
              com suas necessidades. Por isso, oferecemos opções simples e flexíveis
              para você aproveitar ao máximo nossa plataforma.
            </p>

            {planos.map((plano) => (
              <div
                key={plano.id}
                onClick={() =>
                  setPlanoSelecionado(planoSelecionado === plano.id ? null : plano.id)
                }
                style={{
                  cursor: "pointer",
                  border: "1px solid #561fec",
                  borderRadius: 8,
                  padding: 15,
                  marginTop: 15,
                  backgroundColor:
                    planoSelecionado === plano.id ? "#561fec" : "transparent",
                  color: "white",
                  userSelect: "none",
                }}
              >
                <strong>{plano.nome}</strong>
                {planoSelecionado === plano.id && (
                  <div style={{ marginTop: 10, fontWeight: "normal" }}>
                    <p>
                      <strong>Preço:</strong> {plano.preco}
                    </p>
                    <p>
                      <strong>Parcelas:</strong> {plano.parcelas}
                    </p>
                    <p>
                      <strong>Benefícios:</strong> {plano.beneficios}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlanoParaPagamento(plano.nome);
                        setPlanoSelecionado(null);
                      }}
                      style={{
                        background: "#fff",
                        color: "#561fec",
                        border: "1px solid #fff",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        marginTop: 10,
                        cursor: "pointer",
                      }}
                    >
                      Obter
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "rgb(11, 11, 11)",
        display: "flex",
        height: "100vh",
        boxShadow: "10px 0 10px rgba(0, 0, 0, 1)",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: 40,
          background: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "70vh",
        }}
      >
        <h1 style={{ color: "#561fec" }}>Login</h1>
        <p>Bem vindo de volta! Por favor realize seu login.</p>

        <form>
          <label>Endereço de Email</label>
          <input
            type="email"
            placeholder="sthe@123.com"
            required
            style={{
              width: "100%",
              padding: 10,
              margin: "10px 0",
              border: "1px solid #ccc",
            }}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="******"
            required
            style={{
              width: "100%",
              padding: 10,
              margin: "5px 0",
              border: "1px solid #ccc",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label>
              <input type="checkbox" /> Lembre-me
            </label>
            <a href="#" style={{ textDecoration: "none", color: "#561fec" }}>
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              background: "#561fec",
              color: "white",
              border: "none",
              marginTop: 10,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Login
          </button>

          <button
            type="button"
            style={{
              width: "100%",
              padding: 10,
              background: "white",
              color: "#561fec",
              border: "1px solid #3A3BFF",
              marginTop: 10,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            Cadastrar
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 20 }}>Faça login com</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          {["Facebook", "LinkedIn", "Google"].map((rede) => (
            <a
              key={rede}
              href="#"
              style={{ textDecoration: "none", color: "#561fec" }}
            >
              {rede}
            </a>
          ))}
        </div>
      </div>

      <div style={{ width: "60vw", padding: 20 }}>
        <div
          style={{
            marginTop: 30,
            fontSize: 25,
            display: "flex",
            gap: 30,
            justifyContent: "center",
          }}
        >
          {["home", "sobre", "contatos", "planos"].map((secao) => (
            <a
              key={secao}
              href="#"
              onClick={() => {
                setSecaoAtiva(secao);
                setPlanoSelecionado(null);
                setPlanoParaPagamento(null);
                setPagamentoFeito(false);
              }}
              style={{
                textDecoration: "none",
                color: secaoAtiva === secao ? "#561fec" : "white",
              }}
            >
              {secao.charAt(0).toUpperCase() + secao.slice(1)}
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            padding: 20,
            border: "1px solid #561fec",
            borderRadius: 10,
            background: "#1e1e1e",
            color: "white",
            minHeight: 200,
          }}
        >
          {renderSecao()}
        </div>
      </div>
    </div>
  );
}