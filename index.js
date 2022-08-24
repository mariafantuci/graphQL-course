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
    discount: Float!
    discount_price: Float
  }

  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    currentTime: String!
    horaAtual: Date!
    logUser: User
    featuredProduct: Product
  }
`;

const resolvers = {
  User: {
    salary(user) {
      return user.salary_real;
    },
  },
  Product: {
    discount_price(product) {
      let final = 0;
      if (product.discount != undefined && product.discount != null) {
        final =  product.price * (product.discount / 100);
      }
      return final;
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
        price: 6746.7,
        discount: 10,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
