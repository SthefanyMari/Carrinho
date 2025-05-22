import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import produtos from '/src/componentes/Pages/produto/produtos.js';
import '/src/componentes/Pages/produto/produto.css';

export default function Produto() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addItem(item) {
    setCartItems((prev) => [...prev, item]);
  }

  const total = cartItems.reduce((sum, item) => sum + item.valor, 0);

  return (
    <div className="body">
      <div className="cartButton">
        <button onClick={() => setShowCart(true)}>
          <FaShoppingCart size={20} />
        </button>
        <span className="cartCount">
          {cartItems.length > 0 && cartItems.length}
        </span>
      </div>

      {showCart && (
        <div className="carrinhoLateral">
          <div className="carrinhoHeader">
            <h3>Meu Carrinho</h3>
            <button className="fecharCarrinho" onClick={() => setShowCart(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="itensCarrinho">
            {cartItems.map((item, index) => (
              <div className="itemCarrinho" key={index}>
                <img src={item.imagem} alt={item.nome} />
                <div className="infoCarrinho">
                  <span className="nome">{item.nome}</span>
                  <span className="preco">R$ {item.valor.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="totalCarrinho">
            <strong>Total:</strong> R$ {total.toFixed(2)}
          </div>
        </div>
      )}

      <div className="parteFundo">
        {produtos.map((produto, index) => (
          <div className="parteDentro" key={index}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.valor.toFixed(2)}</p>
            <button onClick={() => addItem(produto)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
