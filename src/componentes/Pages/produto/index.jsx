import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { DataContext } from "../../context/data";
import { CriarProduto, AtualizarProduto, DeletarProduto,LerProdutos } from "../../Data/fetchProdutos";
import "/src/componentes/Pages/produto/produto.css";

export default function Produtos() {
  const { produtos, setProdutos } = useContext(DataContext);
  const { teste } = useContext(AuthContext);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [modalCriar, setModalCriar] = useState(false);
  const [modalAtualizar, setModalAtualizar] = useState(null);
  const [modalVisualizar, setModalVisualizar] = useState(null);
  const [modalRemover, setModalRemover] = useState(null);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    valor: "",
    imagem: "",
  });

  useEffect(() => {
    LerProdutos(setProdutos);
  }, []);

  const addItem = (item) => setCartItems((prev) => [...prev, item]);
  const total = cartItems.reduce((sum, item) => sum + item.valor, 0);

  const handleCriarProduto = async () => {
    const novo = { ...novoProduto, valor: parseFloat(novoProduto.valor) };
    await CriarProduto(novo.nome, novo.valor, novo.imagem);
    await LerProdutos(setProdutos);
    setNovoProduto({ nome: "", valor: "", imagem: "" });
    setModalCriar(false);
  };

  const handleAtualizarProduto = async (index) => {
    const produto = produtos[index];
    await AtualizarProduto(
      produto.id,
      novoProduto.nome,
      parseFloat(novoProduto.valor),
      novoProduto.imagem
    );
    await LerProdutos(setProdutos);
    setModalAtualizar(null);
  };

  const handleRemoverProduto = async (index) => {
    const produto = produtos[index];
    await DeletarProduto(produto.id);
    await LerProdutos(setProdutos);
    setModalRemover(null);
  };

  return (
    <div className="containerProdutos">
      <div className="cartButton" onClick={() => setShowCart(true)}>
        <button>
          <FaShoppingCart size={25} />
        </button>
        <span className="cartCount">
          {cartItems.length > 0 && cartItems.length}
        </span>
      </div>

      <button className="botaoCrud" onClick={() => setModalCriar(true)}>
        + Criar Produto
      </button>

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

      <div className="produtos">
        {produtos.map((produto, index) => (
          <div key={index} className="produto">
            <img src={produto.imagem} alt={produto.nome} />
            <h4>{produto.nome}</h4>
            <p>R$ {produto.valor.toFixed(2)}</p>

            <div className="botoesProduto">
              <button onClick={() => addItem(produto)}>Comprar</button>
              <button onClick={() => setModalVisualizar(produto)}>Ver</button>
              <button
                onClick={() => {
                  setModalAtualizar(index);
                  setNovoProduto(produto);
                }}
              >
                Atualizar
              </button>
              <button onClick={() => setModalRemover(index)}>Remover</button>
            </div>
          </div>
        ))}
      </div>

      {modalCriar && (
        <div className="modal">
          <div className="modalContent">
            <h3>Criar Produto</h3>
            <input
              placeholder="Nome"
              value={novoProduto.nome}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, nome: e.target.value })
              }
            />
            <input
              placeholder="Preço"
              type="number"
              value={novoProduto.valor}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, valor: e.target.value })
              }
            />
            <input
              placeholder="URL da Imagem"
              value={novoProduto.imagem}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, imagem: e.target.value })
              }
            />
            <button onClick={handleCriarProduto}>Salvar</button>
            <button onClick={() => setModalCriar(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {modalAtualizar !== null && (
        <div className="modal">
          <div className="modalContent">
            <h3>Atualizar Produto</h3>
            <input
              placeholder="Nome"
              value={novoProduto.nome}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, nome: e.target.value })
              }
            />
            <input
              placeholder="Preço"
              type="number"
              value={novoProduto.valor}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, valor: e.target.value })
              }
            />
            <input
              placeholder="URL da Imagem"
              value={novoProduto.imagem}
              onChange={(e) =>
                setNovoProduto({ ...novoProduto, imagem: e.target.value })
              }
            />
            <button onClick={() => handleAtualizarProduto(modalAtualizar)}>
              Salvar
            </button>
            <button onClick={() => setModalAtualizar(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {modalVisualizar && (
        <div className="modal">
          <div className="modalContent">
            <h3>{modalVisualizar.nome}</h3>
            <img
              src={modalVisualizar.imagem}
              alt={modalVisualizar.nome}
              style={{ maxWidth: "100%" }}
            />
            <p>Preço: R$ {modalVisualizar.valor.toFixed(2)}</p>
            <button onClick={() => setModalVisualizar(null)}>Fechar</button>
          </div>
        </div>
      )}

      {modalRemover !== null && (
        <div className="modal">
          <div className="modalContent">
            <h3>Remover Produto</h3>
            <p>
              Tem certeza que deseja remover{" "}
              <strong>{produtos[modalRemover]?.nome}</strong>?
            </p>
            <button onClick={() => handleRemoverProduto(modalRemover)}>Sim</button>
            <button onClick={() => setModalRemover(null)}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}
