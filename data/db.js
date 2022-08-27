const users = [
  {
    id: 1,
    name: 'João Batista',
    email: 'jbsantos@gmail.com',
    age: 29,
    perfil_id: 1,
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'Rafael Junior',
    email: 'rafajun@gmail.com',
    age: 31,
    perfil_id: 2,
    status: 'INACTIVE',
  },
  {
    id: 3,
    name: 'Daniela Smith',
    email: 'danismith@gmail.com',
    age: 23,
    perfil_id: 1,
    status: 'BLOCKED',
  },
];

const perfis = [
  {
    id: 1,
    name: 'comum',
  },
  {
    id: 2,
    name: 'administrador',
  },
];

module.exports = { users, perfis };
