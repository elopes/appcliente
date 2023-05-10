import fetch from '../axios/config'
import { useState,useEffect,useCallback  } from 'react'
import { Link } from 'react-router-dom'
import "./Conteudo.css"

const Lojista = () => {
  const [dados,setDados] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  const getDados =async()=>{
    try {
      const response = await fetch.get("/users");
     
      const data = response.data.data;
      setDados(data);
    } catch (error) {
      console.log(error);
    }
  }

  const filterUsersByType = useCallback((type) => {
    const filtered = dados.filter((user) => user.profile.tipo === type);
    setFilteredUsers(filtered);
  }, [dados]);

  useEffect(()=>{

    getDados()
  
  },[])
  
  useEffect(() => {
    filterUsersByType('lojista');
  }, [filterUsersByType]);

  return (
    <>
        <h1 className="titulo">Lista de Lojistas</h1>

       <div className="conteudo">
      {dados.length > 0 ? (
    filteredUsers.length > 0 ? (
    filteredUsers.map((user) => (
      <div className="dado" key={user.id}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Tipo: {user.profile.tipo}</p>
        <p>Quantia R$: {user.carteira.saldo}</p>
        <Link to={`/dados/${user.id}`} className="btn">Ler mais</Link>
      </div>
    ))
  ) : (
    <p>Nenhum usuário encontrado.</p>
  )
  ) : (
  <p>Carregando...</p>
  )}
  </div>
    </>
    
  )
}

export default Lojista