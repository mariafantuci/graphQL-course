const { usuarios, proximoId } = require('../data/db');

module.exports = {
  //destruct{ nome, email, idade } from args
  novoUsuario(_, args) {
    const emailExiste = usuarios.some((users) => users.email === args.email);
    if (emailExiste) {
      throw new Error('Email already exists');
    }
    const novo = {
      id: proximoId(),
      ...args,
      perfil_id: 1,
      status: 'ATIVO',
    };
    usuarios.push(novo);
    return novo;
  },
};
