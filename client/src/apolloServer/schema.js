const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    productsForHome: [Product!]!
  }
  type Product {
    id: String!
    name: String!
    imageURL: String
    description: String
    price: Int!
  }
`;

module.exports = typeDefs;
