import {useContext, useState, createContext, useEffect} from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
    HttpLink
} from "@apollo/client";
import {endpoint} from "../config";

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext)
}

function useProvideAuth() {
    const [authToken, setAuthToken] = useState(null)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if(!authToken) {
            if(window && window.localStorage) {
                const token = window.localStorage.getItem("token");
                if(token) {
                    setAuthToken(token);
                    setUserData(JSON.parse(window.localStorage.getItem("userData")))
                }
            }
        }
    })

    const isSignedIn = () => {
        return !!authToken;
    }

    const getAuthHeaders = () => {
        if (!authToken) return null

        return {
            authorization: `Bearer ${authToken}`,
        }
    }

    const createApolloClient = () => {
        const link = new HttpLink({
            uri: endpoint,
            headers: getAuthHeaders(),
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache({
                addTypename: false
            }),
        })
    }

    const signIn = async ({email, password}) => {
        const client = createApolloClient();
        const LoginMutation = gql`
            mutation signin($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    name
                    cart{
                        value
                        items {
                            product_uid
                            quantity
                            price
                        }
                    }
                }
            }
        `

        const result = await client.mutate({
            mutation: LoginMutation,
            variables: {email, password},
        })

        console.log(result)

        if(window && window.localStorage) {
            const { token, cart, name } = result.data.login
            window.localStorage.setItem("token", token)
            window.localStorage.setItem("userData", JSON.stringify({cart, name}))
        }

        if (result?.data?.login?.token) {
            const { token, cart, name } = result.data.login
            setAuthToken(token)
            setUserData({
                cart,
                name
            })
        }
        return result.data.login
    }

    const signUp = async ({email, password, name }) => {
        const client = createApolloClient();
        const SignupMutation = gql`
            mutation Signup($email: String!, $password: String!, $cart: CartInput, $name: String!) {
                signup(email: $email, password: $password, cart: $cart, name: $name) {
                    name
                    token
                    cart{
                        value
                        items {
                            product_uid
                            quantity
                            price
                        }
                    }
                }
            }
        `

        const result = await client.mutate({
            mutation: SignupMutation,
            variables: {
                email,
                password,
                name ,
                cart: {
                    value: 0,
                    items: null
                }},
        })

        console.log(result)

        if(window && window.localStorage) {
            const { token, cart, name } = result.data.signup
            window.localStorage.setItem("token", token)
            window.localStorage.setItem("userData", JSON.stringify({cart, name}))
        }

        if (result?.data?.signup?.token) {
            const { token, cart, name } = result.data.signup
            setAuthToken(token)
            setUserData({
                cart,
                name
            })
        }
        return result.data.signup
    }

    const signOut = async () => {
        if(window) {
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("userData")
        }
       await setAuthToken(null);
        await setUserData(null)
    }

    const getLoggedInUserData = () => {
        if(window) {
            const userData = window.localStorage.getItem("userData")
            if(userData) {
                return JSON.parse(userData)
            } else {
                return {}
            }
        } else {
            return {}
        }
    }

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
        getAuthHeaders,
        signUp,
        getLoggedInUserData
    }
}

const AuthProvider = ({children}) => {
    const auth = useProvideAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

module.exports = {
    useProvideAuth,
    AuthContext,
    useAuth,
    AuthProvider
}