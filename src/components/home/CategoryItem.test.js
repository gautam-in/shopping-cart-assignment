import { CategoryItem } from "../index-components"
import { render, screen } from '@testing-library/react';
import {  ProductsProvider } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import  userEvent  from '@testing-library/user-event';
import React from "react"


describe("test Category item ", () => {
    test("should render all the elements of category item", () => {
        const product = {description: "A variety of fresh fruits and vegetables.",
        enabled: true,
        id: "5b6899953d1a866534f516e2",
        imageUrl: "images/category/fruits.webp",
        imageUrlSmall: "images/category/fruits_small.webp",
        key: "fruit-and-veg",
        name: "Fruits & Vegetables",
        order: 1}
        render(<BrowserRouter><ProductsProvider><CategoryItem item = {product}/></ProductsProvider></BrowserRouter>)
        expect(screen.getByAltText("fruit-and-veg")).toHaveAttribute("src", "images/category/fruits.webp")
        expect(screen.getByText("Fruits & Vegetables")).toBeInTheDocument()
        expect(screen.getByText("A variety of fresh fruits and vegetables.")).toBeInTheDocument()
        expect(screen.getByRole("button", {name: "Explore deals"})).toBeInTheDocument()




    })
})