const { getPreSignedUrl } = require("../utils/aws")
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
    
    type Query {
        banners: [Banner!]! 
    }
    
    schema {
        query: Query
    }
`

const resolvers = {
    Query: {
        banners: async (args, req) => {
            const banners = await Banners.find({});
            const bannersWithTempUrl = banners.map((banner) => {
                const preSignedUrl = getPreSignedUrl(banner.bannerImageUrl);
                return {...banner._doc, temp_url: preSignedUrl}
            })
            return bannersWithTempUrl
        }
    }
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers