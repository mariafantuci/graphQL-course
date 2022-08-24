const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    # this ! means the return must be a string can't be null
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Product {
    name: String!
    price: Float!
    discount: Float
    discountPrice: Float
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    currentTime: String!
    horaAtual: Date!
    logUser: User
    featuredProduct: Product
    #retorna um array de elementos obrigatoriamente e os itens desse array é obrigatóriamente inteiros
    numerosMegaSena: [Int!]!
  }
`;

const resolvers = {
  User: {
    salary(user) {
      return user.salary_real;
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
  },
};

function removeDuplicates(numbers) {
  const newArray = [...new Set(numbers)];
  return newArray;
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
