const { Router } = require('express')

const AlunoController = require('./src/Controllers/AlunoController')

const routes = Router()

routes.get('/aluno', AlunoController.index)
routes.get('/aluno/:id', AlunoController.getAluno)
routes.post('/aluno', AlunoController.create)
routes.put('/aluno', AlunoController.edit)
routes.delete('/aluno', AlunoController.delete)

module.exports = routes