import {useContext, useState, createContext} from "react";
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
            cache: new InMemoryCache(),
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

    const signOut = () => {
        if(window) {
            window.localStorage.removeItem("token")
        }
        setAuthToken(null)
    }

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
        getAuthHeaders,
        signUp
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