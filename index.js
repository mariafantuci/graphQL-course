const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # Pontos de entrada da sua API!
  type Query {
    ola: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return 'First exemple';
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
