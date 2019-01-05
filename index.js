const { GraphQLServer } = require("graphql-yoga");
const { typeDefs } = require("./graphql/types");
const resolvers = require("./graphql/resolvers");
const { makeExecutableSchema } = require("graphql-tools");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const opts = {
  endpoint: "/graphql",
  port: process.env.PORT || 8080
};

const server = new GraphQLServer({
  schema,
  opts
});

server.start().then(() => {
  console.log(`Server ready on ${process.env.port}`);
});
