const express = require('express')
const mongoose = require('mongoose')
const rota = require('./routes')
const app = express()


app.use(express.json())
app.use(rota)

mongoose.connect('mongodb+srv://adriano:123@cluster0-l1u1h.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(3333)