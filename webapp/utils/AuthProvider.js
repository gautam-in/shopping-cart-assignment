import {useContext, useState, createContext} from "react";
import {gql, useApolloClient} from "@apollo/client";

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext)
}

function useProvideAuth() {
    const [authToken, setAuthToken] = useState(null)

    const isSignedIn = () => {
        return !!authToken;
    }

    const getAuthHeaders = () => {
        if (!authToken) return null

        return {
            authorization: `Bearer ${authToken}`,
        }
    }

    const signIn = async ({email, password}) => {
        const client = useApolloClient();
        const LoginMutation = gql`
            mutation signin($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                }
            }
        `

        const result = await client.mutate({
            mutation: LoginMutation,
            variables: {email, password},
        })

        console.log(result)

        if(window && window.localStorage) {
            window.localStorage.setItem("token", result.data.login.token)
        }

        if (result?.data?.login?.token) {
            setAuthToken(result.data.login.token)
        }
    }

    const signUp = ({email, password, }) => {

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
        getAuthHeaders
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