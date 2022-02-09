import React, { useEffect, useState } from "react";
import Category from "./Category";
import "./Categories.scss";
import Card from "./Card";
import HeroCarousel from "./HeroCarousel";
import GetCategories from "./GetCategories";
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        async function FetchCategories() {
            let Res = await GetCategories();
            let categoriesSorted = Res.data.sort((a, b) => (a.order - b.order));
            let categoriesEnabled = categoriesSorted.filter(category => (category.enabled === true));
            setCategories(categoriesEnabled);
        }
        FetchCategories();
    }, []);

    return (
        <main>
            <Card>
                <HeroCarousel />
            </Card>
            <div className="category-container row">
                {categories.map((category) =>
                    <Card key={category.id}><Category cat={category} /></Card>
                )}
            </div>
        </main>
    )
}
export default Categories;