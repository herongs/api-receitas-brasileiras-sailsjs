/**
 * ReceitasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async function (req, res) {
    const receitas = await sails.models.receita.find();
    return res.json(receitas);
  },

  find: async function (req, res) {
    const id = req.params.id;
    const receita = await sails.models.receita.findOne({
      id: id,
    });
    return res.json(receita);
  },

  createOne: async function (req, res) {
    try {
      const { title, description, ingredients, prepare_mode, categories, recipe_yeld, total_time, relevance } = req.body;

      const novaReceita = await sails.models.receita
        .create({
          title,
          description,
          ingredients,
          prepare_mode,
          categories,
          recipe_yeld,
          total_time,
        })
        .fetch();

      console.log(novaReceita)

      return res.json(novaReceita);
    } catch (err) {
      console.log(err);
    }
  },

  createMany: async function (req, res) {
    try {
      const receitas = req.body;

      const novasReceitas = await sails.models.receita.createEach(receitas).fetch();

      return res.json(novasReceitas);
    } catch (err) {
      console.log(err);
    }
  },

  findWithIngredients: async function (req, res) {
    const ingredient = req.params.ingredient;

    try {
      const receitas = await sails.models.receita.find({
        ingredients: {
          contains: { ingredient },
        },
      });

      return res.json(receitas);
    } catch (err) {
      return res.serverError({ error: err.message });
    }
  },
};
