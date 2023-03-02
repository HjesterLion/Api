const express = require('express')
const router = require('./src/router/router')

const app = express()

app.use('/', router)

app.listen(3000,() =>{
    console.log('servidor iniciado')
})