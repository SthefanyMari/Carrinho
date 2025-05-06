import React from "react";
import "./carrinho.css";

export default function Carrinho() {
  const itens = [
    {
      id: 1,
      nome: 'Monitor Gamer Curvo Samsung Odyssey 49" OLED',
      preco: "R$ 8.599,90",
      img: "https://images9.kabum.com.br/produtos/fotos/613319/monitor-gamer-curvo-samsung-odyssey-49-oled-super-ultrawide-240hz-0-03ms-displayport-hdmi-freesync-premium-prata-ls49cg930slmzd_1722524398_g.jpg",
    },
    {
      id: 2,
      nome: "Cadeira Gamer KBM! GAMING Tempest CG500",
      preco: "R$ 959,90",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAlZZObc_nr62Oz6mkSbf1h0UEJKdaHzK-TI9qggFUkxGv9VhBBTl2xFVdcnF79KuStPOvC7zS9RrE4P5FdJpNab3rHSVzW0llltv6lLvvx9cycZeLjmimPWOmZUtFsPdSomRp37w&usqp=CAc",
    },
    {
      id: 3,
      nome: "Teclado Gamer Sem Fio Logitech G PRO X",
      preco: "R$ 1.002,00",
      img: "https://m.media-amazon.com/images/I/61eRCzlo6bL._AC_SX679_.jpg",
    },
    {
      id: 4,
      nome: "Mouse pad extra grande: Fallen, HyperX",
      preco: "R$ 130,00",
      img: "https://s2-techtudo.glbimg.com/OnrhaIyGr8WVGnReXsWjsfEyM0Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/k/b/WJLPPVSkCoamAGSCHxrQ/fluxo.jpg",
    },
  ];

  return (
    <div className="carrinho">
      <h2>Seu carrinho tem {itens.length} itens</h2>
      <div className="itens">
        {itens.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.nome} />
            <div className="info"> 
              <p>{item.nome}</p>
              <p className="preco">{item.preco}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total-container">
        <div className="total-wrapper">
          <p className="total-label">Total:</p>
          <p className="preco-total">R$ 10.691,80</p>
        </div>
        <div className="cupom">
          <span>🔖</span>
          <span>Adicionar cupom</span>
        </div>
        <button className="finalizar-compra">Finalizar compra</button>
      </div>
    </div>
  );
}
