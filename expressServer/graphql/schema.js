const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash/merge");
const banners = require("./banners");
const categories = require("./categories")

const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

module.exports = makeExecutableSchema({
    typeDefs: [Query, banners.typeDefs, categories.typeDefs],
    resolvers: merge(resolvers,banners.resolvers, categories.resolvers)
})