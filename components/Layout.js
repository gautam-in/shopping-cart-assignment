import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { auth,db } from "../firebase";
import { useEffect, useContext } from 'react';
import { TokenContext } from "./TokenContext";

export default function Layout({ title,children }) {

    const { user, setUser } = useContext(TokenContext);

    useEffect(() => {
        auth.onAuthStateChanged(user=>{
            if(user){
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    setUser(snapshot?.data()?.email)
                })
            }
            else{
                setUser(null);
            }
        })
    }, [setUser])

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header user={user}/>
            {children}
            <Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Sabka Bazaar | Best Products'
}
