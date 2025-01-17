import express from 'express'

const app=express()

const port=300

app.get('/produto', (req,res)=>{
    res.send('Nossa primeira Rota')
})

app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})