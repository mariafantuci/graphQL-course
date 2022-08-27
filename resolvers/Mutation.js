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
  excluirUsuario(_, { id }) {
    const index = usuarios.findIndex((user) => user.id === id);
    if (index < 0) return null;
    const excluidos = usuarios.splice(index, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarUsuario(_, args) {
    const index = usuarios.findIndex((user) => user.id === args.id);
    if (index < 0) return null;

    usuarios[index].nome = args.nome;
    usuarios[index].email = args.email;
    usuarios[index].idade = args.idade;

    return usuarios[index];
    // const usuario = {
    //   ...usuarios[index],
    //   ...args,
    // };
    // usuarios.splice(index, 1, usuario);
    //return usuario;
  },
};
