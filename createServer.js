const { ApolloServer } = require("apollo-server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const resolvers = require("./resolvers.js");
const typeDefs = require("./typeDefs.js");
const server = new ApolloServer({
  schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen().then(({ url }) => {
  console.log(`server ready on: ${url}`);
});
