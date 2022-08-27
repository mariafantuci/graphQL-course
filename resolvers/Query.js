const { users, perfis } = require('../data/db');
module.exports = {
  ola() {
    return 'First exemple';
  },
  currentTime() {
    const d = new Date();
    return `Current time, hour ${d.getHours()}:${d.getMinutes()}`;
  },
  horaAtual() {
    return new Date();
  },
  logUser() {
    return {
      id: 1,
      name: 'Percy Jackson',
      email: 'percy-poseidon-son@gmail.com',
      age: 12,
      salary_real: 6000.9,
      vip: true,
    };
  },
  featuredProduct() {
    return {
      name: 'Ipad 13 pro',
      price: 4890.86,
      discount: 0.5,
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return removeDuplicates(
      Array(6)
        .fill(0)
        .map((n) => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    );
  },
  users() {
    return users;
  },
  usuarioPorId(parent, { id }) {
    const selecionados = users.filter((u) => u.id === id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const selected = perfis.filter((p) => p.id === id);
    return selected ? selected : null;
  },
};
function removeDuplicates(numbers) {
  const newArray = [...new Set(numbers)];
  return newArray;
}
