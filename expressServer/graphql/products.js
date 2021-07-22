const { getPreSignedUrl, injectTempUrl } = require("../utils/aws");
const ProductModel = require("../model/products");

const typeDefs = `
    type Product {
        _id: ID!
        name: String!
        sku: String!
        product_uid: String!
        temp_url: String!
        price: Int!
        stock: Int!
        category: String!
        description: String!
    }
    
    extend type Query {
        products(category: String!): [Product!]!
    }
`

const resolvers = {
    Query: {
        products: async (_ ,args) => {
            let products;
            if(args.category === "all") {
                products = await ProductModel.model.find({});
            } else {
                products = await ProductModel.model.find({category: args.category});
            }
            return injectTempUrl(products, "imageURL");
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}