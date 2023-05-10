import React from 'react'
import "./Formulario.css";
import fetch from '../axios/config'
import {useState} from 'react'
import { useNavigate  } from 'react-router-dom'

const Transfere = () => {
const navigate=useNavigate()
const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [quantia, setQuantia] = useState();


const create= async(e)=>{
e.preventDefault();

const transferencia = { origem, destino, quantia };

await fetch.post("/transfere", transferencia);
navigate("/board");
};
  return (
    <>
      <div className="formulario">
        <h1 className="titulo">Transferência</h1>
        <form onSubmit={(e) => create(e)}>
          <div className="form-control">
            <label htmlFor="origem">Origem:</label>
            <input
              type="number"
              name="origem"
              id="origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
            <label htmlFor="destino">Destino:</label>
            <input
              type="number"
              name="destino"
              id="destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
            <label htmlFor="quantia">Quantia:</label>
            <input
              type="number"
              name="quantia"
              id="quantia"
              value={quantia}
              onChange={(e) => setQuantia(e.target.value)}
            />
            <input type="submit" value={"Transferir"} className="btn" />
          </div>

        </form>
      </div>
   
    </>
  )}

export default Transfere

/*
<div className="formulario">
<h1 className="titulo">Transferência</h1>
<form onSubmit={(e)=>create(e)}>
  <div className="form-control">
    <label htmlFor="title">Título:</label>
    <input
    type="text"
    name="title"
    id="title"
    placeholder="Digite o título"
    onChange={(e)=>setTitle(e.target.value)}
    />
    <label htmlFor="valor">valor:</label>
    <input
    type="text"
    name="title"
    id="title"
    placeholder="Digite o Valor"
    onChange={(e)=>setBody(e.target.value)}
    />
    <label htmlFor="body">Conteúdo:</label>
    <textarea
    name="body"
    id="body"
    placeholder="Digite o conteúdo."
    />
    <input type="submit" value={"Criar Post"} className="btn"/>
  </div>

</form>
</div>
*/