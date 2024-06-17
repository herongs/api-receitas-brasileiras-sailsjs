// test/ReceitaController.test.js

const request = require("supertest");
const sails = require("sails");

beforeAll(async () => {
  await new Promise((resolve) => sails.lift({}, resolve));
});

afterAll(async () => {
  await sails.lower();
});

describe("ReceitaController", () => {
  describe("ConexaoBancoDados", () => {
    it("Deve conectar ao banco de dados e recuperar pelo menos uma receita", async () => {
      // Tenta recuperar todas as receitas
      const response = await request(sails.hooks.http.app)
      .get("/receitas")
      .expect(200); // Espera-se que a resposta seja 200 OK

    // Verifica se a resposta está definida
      expect(response.body).toBeDefined();

    });
  });



  describe("all", () => {
    it("Deve retornar todas as receitas", async () => {
      // Simula a chamada HTTP GET para /receita/all
      const response = await request(sails.hooks.http.app)
        .get("/receitas")
        .expect(200);

      expect(response.body).toBeDefined();
      expect(response.body.length).toBeGreaterThanOrEqual(0);

      const primeiraReceita = response.body[0];
      expect(primeiraReceita).toHaveProperty("id");
      expect(primeiraReceita).toHaveProperty("title");
      expect(primeiraReceita).toHaveProperty("description");
      expect(primeiraReceita).toHaveProperty("ingredients");
      expect(primeiraReceita).toHaveProperty("prepare_mode");
    });
  });

  describe("createOne", () => {
    it("Deve criar uma nova receita", async () => {
      // Simula a chamada HTTP POST para /receitaS

      const novaReceita = {
        title: "Receita de teste",
        description: "Descrição da receita de teste",
        ingredients: ["ingrediente 1", "ingrediente 2"],
        prepare_mode: ["Passo 1", "Passo 2"],
        categories: ["categoria 1", "categoria 2"],
        recipe_yeld: "4 porções",
        total_time: "30 minutos",
      };

      const response = await request(sails.hooks.http.app)
        .post("/receita")
        .send(novaReceita)
        .expect(200);

      // Verifica se a resposta contém a nova receita
      expect(response.body).toBeDefined();
      expect(response.body).toMatchObject(novaReceita);
      expect(response.body.title).toBe(novaReceita.title);
      expect(response.body.description).toBe(novaReceita.description);
      expect(response.body.ingredients).toEqual(novaReceita.ingredients);
      expect(response.body.prepare_mode).toEqual(novaReceita.prepare_mode);
      expect(response.body.categories).toEqual(novaReceita.categories);
      expect(response.body.recipe_yeld).toBe(novaReceita.recipe_yeld);
      expect(response.body.total_time).toBe(novaReceita.total_time);
    });
  });

  describe("createMany", () => {
    it("Deve criar um array de novas receita", async () => {

      const novasReceitas = [
        {
          title: "Receita de teste",
          description: "Descrição da receita de teste",
          ingredients: ["ingrediente 1", "ingrediente 2"],
          prepare_mode: ["Passo 1", "Passo 2"],
          categories: ["categoria 1", "categoria 2"],
          recipe_yeld: "4 porções",
          total_time: "30 minutos",
        },
        {
          title: "Receita de teste 2",
          description: "Descrição da receita de teste 2",
          ingredients: ["ingrediente 1", "ingrediente 2"],
          prepare_mode: ["Passo 1", "Passo 2"],
          categories: ["categoria 1", "categoria 2"],
          recipe_yeld: "4 porções",
          total_time: "30 minutos",
        },

      ];

      const response = await request(sails.hooks.http.app)
        .post("/receitas")
        .send(novasReceitas)
        .expect(200);

      expect(response.body).toBeDefined();
      expect(response.body).toMatchObject(novasReceitas);

      expect(response.body[0].title).toBe(novasReceitas[0].title);
      expect(response.body[0].description).toBe(novasReceitas[0].description);
      expect(response.body[0].ingredients).toEqual(novasReceitas[0].ingredients);
      expect(response.body[0].prepare_mode).toEqual(novasReceitas[0].prepare_mode);
      expect(response.body[0].categories).toEqual(novasReceitas[0].categories);
      expect(response.body[0].recipe_yeld).toBe(novasReceitas[0].recipe_yeld);
      expect(response.body[0].total_time).toBe(novasReceitas[0].total_time);

      expect(response.body[1].title).toBe(novasReceitas[1].title);
      expect(response.body[1].description).toBe(novasReceitas[1].description);
      expect(response.body[1].ingredients).toEqual(novasReceitas[1].ingredients);
      expect(response.body[1].prepare_mode).toEqual(novasReceitas[1].prepare_mode);
      expect(response.body[1].categories).toEqual(novasReceitas[1].categories);
      expect(response.body[1].recipe_yeld).toBe(novasReceitas[1].recipe_yeld);
      expect(response.body[1].total_time).toBe(novasReceitas[1].total_time);

    });
  });
});
