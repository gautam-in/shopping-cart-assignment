import React from "react";
import Categories from './Categories';
import Banner from "./Banner";

const Homepage = (props) => {

    return (
        <>
            <Banner />
            <Categories />
        </>
    )
}
export default React.memo(Homepage);