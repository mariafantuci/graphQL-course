const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');

const users = [
  {
    id: 1,
    name: 'João Batista',
    email: 'jbsantos@gmail.com',
    age: 29,
    perfil_id: 1,
  },
  {
    id: 2,
    name: 'Rafael Junior',
    email: 'rafajun@gmail.com',
    age: 31,
    perfil_id: 2,
  },
  {
    id: 3,
    name: 'Daniela Smith',
    email: 'danismith@gmail.com',
    age: 23,
    perfil_id: 1,
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

const resolvers = {
  User: {
    salary(user) {
      return user.salary_real;
    },
    perfil(user) {
      const seletedPerfil = perfis.filter((p) => p.id === user.perfil_id);
      return seletedPerfil ? seletedPerfil[0] : null;
    },
  },
  Product: {
    discountPrice(product) {
      if (product.discount) {
        return product.price * (1 - product.discount);
      }
      return product.price;
    },
  },
  Query: {
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
  },
};

function removeDuplicates(numbers) {
  const newArray = [...new Set(numbers)];
  return newArray;
}
const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
