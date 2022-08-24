const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # Pontos de entrada da sua API!
  type Query {
    ola: String
    currentTime: String
    horaAtual: String
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
      return `${new Date()}`;
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
