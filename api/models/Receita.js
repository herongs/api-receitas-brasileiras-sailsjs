/**
 * Receita.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: { type: 'string', required: true },
    trackback: { type: 'string', required: true },
    description: { type: 'string', required: true },
    ingredients: {
      type: 'json',
      columnType: 'array',
    },
    prepare_mode: {
      type: 'json',
      columnType: 'array',
    },
  },
};

