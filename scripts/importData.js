

// scripts/importData.js
const fs = require("fs");
const sails = require("sails");
const Receita = require("../api/controllers/ReceitasController");
const path = require("path");

async function importData() {
  try {
    await sails.lift();

    // Leia o arquivo JSON
    const data = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../assets/data/receita.json"),
        "utf8"
      )
    );

    // Percorra cada objeto no array e crie uma nova entrada no banco de dados
    for (const item of data) {
      await Receita.create(item);
    }

  } catch (error) {
    console.error("Erro ao importar dados:", error);
  } finally {
    await sails.lower();
  }
}

importData();
