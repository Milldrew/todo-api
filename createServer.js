const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers.js");
const typeDefs = require("./typeDefs.js");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready on: ${url}`);
});
