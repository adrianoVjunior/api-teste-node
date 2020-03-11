const Aluno = require('../Models/Aluno')
module.exports = {
    async index(request, response) {
        const AlunoRetorno = await Aluno.find()
        return response.json(AlunoRetorno)
    },

    async getAluno(request, response) {
        const AlunoRetorno = await Aluno.find()
        return response.json(AlunoRetorno)
    },

    async create(request, response) {
        let { nome, cpf, email } = request.body

        const AlunoRetorno = await Aluno.create({
            nome,
            cpf,
            email
        })

        return response.json(AlunoRetorno)
    },

    async edit(request, response) {
        let { nome, cpf, email } = request.body

        const AlunoRetorno = await Aluno.updateOne({ cpf: cpf }, { $set: { nome: nome, email: email } })
        return response.json(AlunoRetorno)
    },

    async delete(request, response) {
        let { cpf } = request.body

        const AlunoRetorno = await Aluno.deleteOne({ cpf: cpf })
        return response.json(AlunoRetorno)
    }
}