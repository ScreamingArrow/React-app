import React from 'react'
import {useHistory } from 'react-router-dom'

function NavBar() {
    let history = useHistory()

    return (
        <div className='navbar'>
            <nav>
                <button className='botaonav'
                onClick={() => {
                    history.push('/')
                }}>Início</button>
                <button className='botaonav'
                onClick={() => {
                    history.push('/cadastro')
                }}>Cadastrar</button>
                <button className='botaonav'
                onClick={() => {
                    history.push('/dashboard')
                }}>Dashboard</button>
            </nav>
        </div>
    )
}

export default NavBar
