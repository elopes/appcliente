import React from 'react'
//import axios from 'axios';
import fetch from '../axios/config'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Conteudo.css"
const Board = () => {
  
  const [dados,setDados] = useState([])
  
  const getDados =async()=>{
    try {
      //const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      const response = await fetch.get("/transferencias");
      //console.log(response)
     const data=response.data;
      //console.log(data)
      setDados(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

    getDados()
  
  },[])

  return (
    <>
     <h1 className="titulo">Últimas operações</h1>
      <div className="conteudo">
        {dados.length === 0 ? <p>Carregando...</p> : (
          dados.map((dado) => (
            <div className="dado" key={dado.id}>
              <h2>Transferência de {dado.transferido_de} para {dado.recebido_por}</h2>
              <p>Quantia: {dado.quantia}</p>
              <Link to={`/dados/${dado.id}`} className="btn">Ler mais</Link>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Board