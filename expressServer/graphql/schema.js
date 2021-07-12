const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash/merge");
const banners = require("./banners");

module.exports = makeExecutableSchema({
    typeDefs: [banners.typeDefs],
    resolvers: merge(banners.resolvers)
})