const { buildSchema } = require("graphql");

module.exports = buildSchema(`
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
`)