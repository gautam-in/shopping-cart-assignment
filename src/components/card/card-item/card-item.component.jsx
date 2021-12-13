import React from 'react'
import { CardContainer, CardContent, CardFooter, CardHeader } from './card-item.styled'

export const CardItem = ({product}) => {
    const { name, imageURL, decription, price } = product;
    return (
        <CardContainer>
            <CardHeader>
               {name}
            </CardHeader>
            <CardContent>
                <img src={imageURL} />
            </CardContent>
            <CardFooter>
                {price} 
            </CardFooter>
        </CardContainer>
    )
}
