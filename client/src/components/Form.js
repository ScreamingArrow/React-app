import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [datanasc, setDatanasc] = useState(0)
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState(0)
    const [genero, setGenero] = useState('')
    const [profissao, setProfissao] = useState('')
    const [numregistro, setNumeroRegistro] = useState(0)
    const [especialidade, setEspecialidade] = useState('')
    const [localidade,setLocalidade] = useState('')
    const [deslocamento, setDeslocamento] = useState('')

    const addUser = () => {
        Axios.post('http://localhost:3001/registrar', {
            nome: nome,
            datanasc: datanasc,
            email: email,
            telefone: telefone,
            genero: genero,
            profissao: profissao,
            numregistro: numregistro,
            especialidade: especialidade,
            localidade: localidade,
            deslocamento: deslocamento
            
        }).then(() => {
            window.alert('Cadastro efetuado')
            console.log('Sucesso')
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form className='cadastro' onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label>
                        Nome:
                        <input type='text'
                        required={true} 
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}/>
                    </label>
                    <label>
                        Data de nascimento:
                        <input type='date'
                        required={true}
                        value={datanasc}
                        onChange={(e) => {
                            setDatanasc(e.target.value)
                        }}/>
                    </label>
                    <label>
                        Email:
                        <input type='email'
                        required={true}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    </label>
                    <label>
                        Telefone:
                        <input type='tel'
                        required={true}
                        placeholder=''
                        value={telefone}
                        onChange={(e) => {
                            setTelefone(e.target.value)
                        }}/>
                    </label>
                    <label>
                        Gênero:
                        <input type='text'
                        required={true}
                        value={genero}
                        onChange={(e) => {
                            setGenero(e.target.value)
                        }}/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Dados Profissionais</legend>
                    <select value={profissao}
                    onChange={(e) => {
                        setProfissao(e.target.value)
                    }}>
                        <option value="selecione uma opção">Selecione uma Opção</option>
                        <option value="medico">Médico(a)</option>
                        <option value="enfermeiro">Enfermeiro(a)</option>
                        <option value="tecEnfermagen">Técnico de Enfermagem</option>
                        <option value="fonoaudiologo">Fonoaudiólogo(a)</option>
                    </select>
                    <label>
                        Número de Registro (Se possuir): 
                        <input type='text'
                        placeholder=''
                        value={numregistro}
                        onChange={(e) => {
                            setNumeroRegistro(e.target.value)
                        }}/>
                    </label>
                 </fieldset>
                 <fieldset>
                    <legend>Área de atuação:</legend>

                    <label>Especialidade:</label>
                    <input type='text'
                    placeholder=''
                    value={especialidade}
                    onChange={(e) => {
                        setEspecialidade(e.target.value)
                    }}/>

                    <label>Localidade:</label>
                    <input type='text' 
                    placeholder=''
                    value={localidade}
                    onChange={(e) => {
                        setLocalidade(e.target.value)
                    }}/>


                    <label>Deslocamento:</label>
                    <input type='text'
                    placeholder=''
                    value={deslocamento}
                    onChange={(e) => {
                        setDeslocamento(e.target.value)
                    }}/>
                </fieldset>   
                <button className='botao' onClick={addUser}>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form
