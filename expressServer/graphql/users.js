const typeDefs = `
    type User {
        
    }
    
    type Address {
        city: String!
        pincode: String!
        state: String!
        streetAddress: String!
    }
    
    type LoginResponse {
        authToken: String!
    }
    
    type GetCartResponse {
        products: [String!]!
    }
    
    extend type Query {
        getUser (userId: ID!): User
    }
    
    extend type Mutation {
       signup (email: String!, password: String!, name: String!, address: Address!, cart: [String]): String!
       login (email: String!, password: String!): LoginResponse!
    }
`

const resolvers = {
    Query: {

    },
    Mutation: {
        signup: (args, req) => {
            const {email, password, name, address, cart} = args
        },
        login: (args, req) => {}
    }
}