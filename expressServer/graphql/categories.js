const { getPreSignedUrl, injectTempUrl } = require("../utils/aws");
const Category = require("../model/categories");

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
        categories: async (args, req) => {
            const categories = await Category.model.find({enabled: true});
            console.log("sks", injectTempUrl(categories, "imageUrl"))
            return injectTempUrl(categories, "imageUrl")
        },
    }
}

module.exports = {
    typeDefs,
    resolvers
}