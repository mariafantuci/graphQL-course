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
  # Pontos de entrada da sua API!
  type Query {
    ola: String!
    currentTime: String!
    horaAtual: Date!
    logUser: User
  }
`;

const resolvers = {
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
    logUser(){
        return {
            id: 1,
            name: 'Percy Jackson',
            email: 'percy-poseidon-son@gmail.com',
            age: 12,
            salary: 6000.90,
            vip: true,
        }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
