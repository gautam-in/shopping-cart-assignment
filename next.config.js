module.exports = {
    async rewrites() {
      return [
        {
          source: '/product/:categoryId',
          destination: '/product',
        },
      ]
    },
  }