const Users = require("../model/user");
const {errorName} = require("../utils/errors");
const {encrypt} = require("../utils/crypto");
const {jwtSign, jwtVerify} = require("../utils/auth");
const isEmpty = require("lodash/isEmpty");
const typeDefs = `
    type User {
        email: String!
        name: String!
        cart: [CartItem]
    }
    
    type Address {
        city: String!
        pincode: String!
        state: String!
        streetAddress: String!
    }
    
    type LoginResponse {
        token: String!
        cart: [CartItem]
        name: String!
    }
    
    type CartItem {
        product_uid: String!,
        quantity: Int!
    }
    
    input CartItemInput {
        product_uid: String!,
        quantity: Int!
    }
    
    extend type Query {
        getUser (userId: ID!): User
        getCart(userId: ID!): [String!]!
    }
    
    extend type Mutation {
       signup (email: String!, password: String!, name: String!, cart: [CartItemInput]): LoginResponse!
       login (email: String!, password: String!): LoginResponse!
       addToCart(products: [CartItemInput!]!): [CartItem!]!
    }
`

const resolvers = {
    Query: {},
    Mutation: {
        signup: async (_, args) => {
            const {email, password, name, cart} = args;
            const encryptedPassword = encrypt(password);
            console.log("aaya", args)
            const existingUser = await Users.model.find({email});
            if (isEmpty(existingUser)) {
                try {
                    const result = await Users.model.create({email, password: encryptedPassword, name, cart});
                    console.log("Created user", result);
                    const token = jwtSign({name, email});
                    return {
                        token,
                        name,
                        cart: []
                    }
                } catch (err) {
                    console.log("Error creating user", err);
                    throw new Error(errorName.SERVER_ERROR)
                }
            } else {
                throw new Error(errorName.USER_ALREADY_EXISTS);
            }
        },
        login: async (_, args) => {
            const { email, password } =  args
            const user = await Users.model.find({email});
            if(isEmpty(user)) {
                throw new Error(errorName.USER_NOT_FOUND)
            } else {
                const encryptedPassword = encrypt(password);
                console.log("decrypt", encryptedPassword, user[0])
                if(user[0].password === encryptedPassword) {
                    return({
                        token: jwtSign({
                            name: user[0].name,
                            email: user[0].email
                        }),
                        name: user[0].name,
                        cart: user[0].cart
                    })
                } else {
                    throw new Error(errorName.WRONG_PASSWORD)
                }
            }
        },
        addToCart: async (_, args) => {

        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}