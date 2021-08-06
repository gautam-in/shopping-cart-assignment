const Users = require("../model/user");
const {errorName} = require("../utils/errors");
const {encrypt} = require("../utils/crypto");
const {jwtSign, jwtVerify, authenticated} = require("../utils/auth");
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
        cart: Cart
        name: String!
    }
    
    type CartItem {
        product_uid: String!,
        quantity: Int!
    }
    
    type Cart {
        value: Int
        items: [CartItem]
    }
    
    input CartInput {
        value: Int
        items: [CartItemInput]
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
       signup (email: String!, password: String!, name: String!, cart: CartInput): LoginResponse!
       login (email: String!, password: String!): LoginResponse!
       addToCart(cartData: CartInput): Cart
    }
`

const resolvers = {
    Query: {},
    Mutation: {
        signup: async (_, args) => {
            const {email, password, name, cart} = args;
            const encryptedPassword = encrypt(password);
            const existingUser = await Users.model.find({email});
            if (isEmpty(existingUser)) {
                try {
                    const result = await Users.model.create({email, password: encryptedPassword, name, cart});
                    console.log("Created user", result);
                    const token = jwtSign({name, email, user_uid: result._id});
                    return {
                        token,
                        name,
                        cart: cart
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
                            email: user[0].email,
                            user_uid: user[0]._id
                        }),
                        name: user[0].name,
                        cart: user[0].cart
                    })
                } else {
                    throw new Error(errorName.WRONG_PASSWORD)
                }
            }
        },
        addToCart: authenticated(
            async (_, args, context, info, authData) => {
                const {cartData} = args
                if(authData.isAuthenticated) {
                    try {
                        const res = await Users.model.updateOne({email: authData.userData.email}, {cart: cartData});
                        const userInfo = await Users.model.findOne({email: authData.userData.email});
                        console.log("userinfo", userInfo)
                        return userInfo.cart
                    } catch (e) {
                        throw new Error(errorName.SERVER_ERROR)
                    }
                }
            }
        )
    }
}

module.exports = {
    typeDefs,
    resolvers
}