import React from "react";
import { useParams } from "react-router-dom";

export default function ProductListing() {

    let params = useParams()

    return (
        <>
            Listing {params.productId}
        </>
    )
}