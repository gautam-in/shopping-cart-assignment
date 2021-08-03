import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({
    category,
    product
}) {
    return (
        <div className="Breadcrumb">

            <ul >
                <li><Link to={`/categories/${category.id}`}>{category.name}</Link></li>
                <li>{product.name}</li>
            </ul>
        </div>
    )
}
