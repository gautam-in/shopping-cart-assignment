import React from 'react';
import Link from "next/link";

const CategoryNavbar = ({categories}) => {
    return (
        <div className="categoryNavbar">
            {categories && categories.map(category => <Link href={`/category/${category._id}/products`} key={category._id}><a className={"navLink"}>{category.name}</a></Link>)}
        </div>
    );
};

export default CategoryNavbar;