import React from 'react'
import NavBar from '../components/NavBar'
import {useHistory } from 'react-router-dom'

export const Home = () => {
    let history = useHistory()

    return (
        <div className='App'>
            <header>
                <h1>Home</h1>
                <title>Home</title>
            </header>
            <NavBar/>
            <div className='cadastro'>
                <form>
                    <fieldset>
                        <legend>Login</legend>

                        <label>
                            Email:
                            <input type='text'/>
                        </label>
                        <label>
                            Senha:
                            <input type='password'/>
                        </label>
                    </fieldset>
                    <button className='botao' 
                    onClick={() => {
                        history.push('/dashboard')
                    }}>Entrar</button>
                    <button className='botao'
                    onClick={() => {
                        history.push('/cadastro')
                    }}>Criar Conta</button>
                </form>
            </div>

        </div>
    )
}
