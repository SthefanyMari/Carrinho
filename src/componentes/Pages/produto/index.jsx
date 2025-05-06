import { useState } from 'react';
import React from 'react';
import '/src/componentes/Pages/produto/produto.css';
import produtos from '/src/componentes/Pages/produto/produtos.js';


function Produto(){
  return(
    <div className='parteFundo'>
      {produtos.map((produto, index)=>(
        <div className='parteDentro' key={index}>
          <img src={produto.imagem} alt={produto.nome}/>
          <h3>{produto.nome}</h3>
          <p>R${produto.valor.toFixed(2)}</p>
          <button>Comprar</button>
          </div>
      ))}
    </div>

  );
}

export default Produto;