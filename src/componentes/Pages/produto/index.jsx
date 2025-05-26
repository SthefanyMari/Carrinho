import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import produtosIniciais from '/src/componentes/Pages/produto/produtos.js';
import '/src/componentes/Pages/produto/produto.css';

export default function Produto() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [modalCriar, setModalCriar] = useState(false);
  const [modalAtualizar, setModalAtualizar] = useState(null); 
  const [modalVisualizar, setModalVisualizar] = useState(null); 
  const [modalRemover, setModalRemover] = useState(null); 

  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    valor: '',
    imagem: ''
  });

  function addItem(item) {
    setCartItems((prev) => [...prev, item]);
  }

  const total = cartItems.reduce((sum, item) => sum + item.valor, 0);

  function handleCriarProduto() {
    setProdutos([...produtos, { ...novoProduto, valor: parseFloat(novoProduto.valor) }]);
    setNovoProduto({ nome: '', valor: '', imagem: '' });
    setModalCriar(false);
  }

  function handleAtualizarProduto(index) {
    const atualizados = [...produtos];
    atualizados[index] = { ...novoProduto, valor: parseFloat(novoProduto.valor) };
    setProdutos(atualizados);
    setModalAtualizar(null);
  }

  function handleRemoverProduto(index) {
    const novos = produtos.filter((_, i) => i !== index);
    setProdutos(novos);
    setModalRemover(null);
  }

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

      <button className="botaoCrud" onClick={() => setModalCriar(true)}>+ Criar Produto</button>

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
  <p style={{ color: '#c62be1', fontWeight: 'bold' }}>R$ {produto.valor.toFixed(2)}</p>
  
  <div className="botoesProduto">
    <button onClick={() => addItem(produto)}>Comprar</button>
    <button onClick={() => setModalVisualizar(produto)}>Ver</button>
    <button onClick={() => {
      setModalAtualizar(index);
      setNovoProduto(produto);
    }}>Atualizar</button>
    <button onClick={() => setModalRemover(index)}>Remover</button>
  </div>
</div>

        ))}
      </div>

      {modalCriar && (
        <div className="modal">
          <div className="modalContent">
            <h3>Criar Produto</h3>
            <input placeholder="Nome" value={novoProduto.nome} onChange={e => setNovoProduto({ ...novoProduto, nome: e.target.value })} />
            <input placeholder="Preço" type="number" value={novoProduto.valor} onChange={e => setNovoProduto({ ...novoProduto, valor: e.target.value })} />
            <input placeholder="URL da Imagem" value={novoProduto.imagem} onChange={e => setNovoProduto({ ...novoProduto, imagem: e.target.value })} />
            <button onClick={handleCriarProduto}>Salvar</button>
            <button onClick={() => setModalCriar(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {modalAtualizar !== null && (
        <div className="modal">
          <div className="modalContent">
            <h3>Atualizar Produto</h3>
            <input placeholder="Nome" value={novoProduto.nome} onChange={e => setNovoProduto({ ...novoProduto, nome: e.target.value })} />
            <input placeholder="Preço" type="number" value={novoProduto.valor} onChange={e => setNovoProduto({ ...novoProduto, valor: e.target.value })} />
            <input placeholder="URL da Imagem" value={novoProduto.imagem} onChange={e => setNovoProduto({ ...novoProduto, imagem: e.target.value })} />
            <button onClick={() => handleAtualizarProduto(modalAtualizar)}>Salvar</button>
            <button onClick={() => setModalAtualizar(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {modalVisualizar && (
        <div className="modal">
          <div className="modalContent">
            <h3>{modalVisualizar.nome}</h3>
            <img src={modalVisualizar.imagem} alt={modalVisualizar.nome} style={{ maxWidth: '100%' }} />
            <p>Preço: R$ {modalVisualizar.valor.toFixed(2)}</p>
            <button onClick={() => setModalVisualizar(null)}>Fechar</button>
          </div>
        </div>
      )}

      {modalRemover !== null && (
        <div className="modal">
          <div className="modalContent">
            <h3>Remover Produto</h3>
            <p>Tem certeza que deseja remover <strong>{produtos[modalRemover]?.nome}</strong>?</p>
            <button onClick={() => handleRemoverProduto(modalRemover)}>Sim</button>
            <button onClick={() => setModalRemover(null)}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}
