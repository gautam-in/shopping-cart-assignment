const { getPreSignedUrl, injectTempUrl } = require("../utils/aws");
const CategoryModel = require("../model/categories");

const typeDefs = `
    type Category {
        _id: ID!
        name: String!
        key: String!
        description: String!
        category_uid: String!
        imageUrl: String!
        order: Int!
        enabled: Boolean!
        temp_url: String
    } 
    
    extend type Query {
        categories: [Category!]!
    }
`

const resolvers = {
    Query: {
        categories: async (_, args) => {
            const categories = await CategoryModel.model.find({enabled: true});
            return injectTempUrl(categories, "imageUrl");
        },
    }
}

module.exports = {
    typeDefs,
    resolvers
}