
module.exports.models = {
  migrate: 'alter',

  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'string', columnName: '_id' },
  },

  dataEncryptionKeys: {
    default: 'Jnf+W5Rq+aAjUwxDQTTZskrb4LqSJlcMuH8YlqoOeY0='
  },

  cascadeOnDestroy: true


};
