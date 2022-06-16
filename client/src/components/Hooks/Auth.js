import { useState } from "react"

const useAuth = () => {
    const [data, setData] = useState(() => JSON.parse(sessionStorage.getItem('credentials')));
    const setDataToStorage = (value) => {
        setData(value)
        sessionStorage.setItem("credentials", JSON.stringify(value))
    }
    const clearStorage = ()=>{
        setData(null);
        sessionStorage.removeItem("credentials");
    }
    return {
        isLoggedIn: data ? true : false,
        data,
        setDataToStorage,
        clearStorage
    }
}
export default useAuth;