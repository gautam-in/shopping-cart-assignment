const { getPreSignedUrl, injectTempUrl } = require("../utils/aws")
const Banners = require("../model/banners");
const typeDefs = `
    type Banner {
        _id: ID!
        banner_uid: String!
        order: Int!
        bannerImageUrl: String!
        bannerImageAlt: String!
        isActive: Boolean!
        temp_url: String!
    }
    
    extend type Query {
        banners: [Banner!]! 
    }
`

const resolvers = {
    Query: {
        banners: async (_, args) => {
            const banners = await Banners.model.find({});
            return injectTempUrl(banners, "bannerImageUrl")
        }
    }
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers