const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    foo: String
  }
`;

module.exports = typeDefs;
