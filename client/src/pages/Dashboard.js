import React from 'react'
import NavBar from '../components/NavBar';
import { useState } from 'react'
import Axios from 'axios'


export const Dashboard = () => {
    const [mostrarUsuarios, setMostrarUsuarios] = useState([])


    const getUsuarios = () => {
        Axios.get("http://localhost:3001/mostrarUsuarios").then((response) => {
      setMostrarUsuarios(response.data)
      console.log('sucess')
    })
    }

    return (
        <div className='App'>
            <header>
                <h1>Dashboard</h1>
                <title>Dashboard</title>
            </header>
            <NavBar/>
            <button className='botao' onClick={getUsuarios}>Mostrar</button>

            {mostrarUsuarios.map((val, key) => {
                return <div className='cadastro'>
                    <h3>Nome: {val.nome}</h3>
                    <h3>Data de Nascimento: {val.datanasc}</h3>
                    <h3>Email: {val.email}</h3>
                    <h3>Telefone: {val.telefone}</h3>
                    <h3> Gênero: {val.genero}</h3>
                    <h3> Profissao: {val.profissao}</h3>
                    <h3>Numero de Registro: {val.numregistro}</h3>
                    <h3> Especialidade: {val.especialidade}</h3>
                    <h3> Localidade: {val.localidade}</h3>
                    <h3> Deslocamento: {val.deslocamento}</h3>
                    </div>
            })}
            
        </div>
    )
}
