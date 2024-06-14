/**
 * ReceitasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Receita = require("../models/Receita");

module.exports = {
    all: async function (req, res) {
        const receitas = await Receita.find();
        return res.json(receitas);
    },

    find: async function (req, res) {
        const id = req.params.id;
        const receita = await Receita.findOne({
            id: id
        });
        return res.json(receita);
    },

    create: async function (req, res) {
      try {
        // Extrair os dados do corpo da requisição
        const { title, trackback, description, ingredients, prepare_mode } = req.body;

        // Criar a nova receita no banco de dados
        const novaReceita = await Receita.create({
          title,
          trackback,
          description,
          ingredients,
          prepare_mode,
        }).fetch(); // Usamos .fetch() para retornar o registro criado com todos os detalhes

        // Retornar a nova receita como resposta
        return res.status(201).json({ receita: novaReceita });
      } catch (err) {
        // Se ocorrer algum erro, retornar uma resposta de erro
        return res.status(500).json({ error: 'Erro ao criar a receita', details: err.message });
      }


    },




};

