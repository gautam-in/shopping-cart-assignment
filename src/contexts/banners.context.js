import { createContext, useState, useEffect } from "react";

export const BannersContext = createContext({
    banners: null,
    setBanners: () => null
});

export const BannersProvider = ({children}) => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('/banners')
        .then((response) => response.json())
        .then((data) => {
            setBanners(data)});
            
    }, [])
    const value = {banners};
    return <BannersContext.Provider value={value}>{children}</BannersContext.Provider>
}