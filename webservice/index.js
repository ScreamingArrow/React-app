const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'lucas',
    database: 'funcionarios'
})

//adicionar usuarios
app.post('/registrar', (req, res) => {
    const nome = req.body.nome
    const datanasc = req.body.datanasc
    const email = req.body.email
    const telefone = req.body.telefone
    const genero = req.body.genero
    const profissao = req.body.profissao
    const numregistro = req.body.numregistro
    const especialidade = req.body.especialidade
    const localidade = req.body.localidade
    const deslocamento = req.body.deslocamento

    db.query('INSERT INTO salvus (nome, datanasc, email, telefone, genero, profissao, numregistro, especialidade, localidade, deslocamento) VALUES (?,?,?,?,?,?,?,?,?,?)',
    [nome,datanasc,email,telefone,genero,profissao, numregistro, especialidade, localidade, deslocamento],
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send('valores inseridos')
        }
    })

  })

//mostrar usuarios no dashboard
app.get('/mostrarUsuarios', (req, res) => {
    db.query('SELECT * FROM salvus', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    })
})

app.listen(3001, () => {
    console.log('servidor funcionando')
})

