// Configuração de rotas
module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'GET /receitas': 'ReceitasController.all',
  'POST /receitas': 'ReceitasController.create',
};
