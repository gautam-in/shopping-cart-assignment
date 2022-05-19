const resolvers = {
  Query: {
    productsForHome: (_, __, { dataSources }) => {
      return dataSources.productAPI.getProductsForHome();
    },
  },
};
module.exports = resolvers;
