// Configuração de rotas
module.exports.routes = {
  'POST /receita': 'ReceitasController.createOne',
  'POST /receitas': 'ReceitasController.createMany',
  'GET /receitas': { controller: 'ReceitasController', action: 'all' },
  'GET /receitas/:id': { controller: 'ReceitasController', action: 'find' },
  'GET /receitas/ingredient/:ingredient': { controller: 'ReceitasController', action: 'findWithIngredients' },
};
