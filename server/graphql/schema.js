const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash/merge");
const banners = require("./banners");
const categories = require("./categories");
const products = require("./products");
const users = require("./users")

const Query = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

module.exports = makeExecutableSchema({
    typeDefs: [Query, banners.typeDefs, categories.typeDefs, products.typeDefs, users.typeDefs],
    resolvers: merge(resolvers,banners.resolvers, categories.resolvers, products.resolvers, users.resolvers)
})