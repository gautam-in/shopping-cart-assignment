const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ProductAPI = require("./datasource/product-api");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productAPI: new ProductAPI(),
    };
  },
});
server.listen().then(() => {
  console.log("Server is Listening on Port 4000");
});
