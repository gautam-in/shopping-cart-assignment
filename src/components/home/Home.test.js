
import { Home } from "../index-components"
import { render, screen } from '@testing-library/react';
import { ProductsContext } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import  userEvent  from '@testing-library/user-event';
import React from "react"

describe("test Home component", () => {
    test("should have five banners if there are five banners", async() => {
        const productState = {bannerData: [{bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        bannerImageUrl: "images/offers/offer1.webp",
        bannerImageUrlSmall: "images/offers/offer1_small.webp",
        id: "5b6c38156cb7d770b7010ccc",
        isActive: true,
        order: 1}],
        categoryData: [{description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "images/category/beverages.webp",
        imageUrlSmall: "images/category/beverages_small.webp",
        key: "beverages",
        name: "Beverages",
        order: 3}]
    }
       render(<BrowserRouter>
       <ProductsContext.Provider value = {{ productState}}>
        <Home />
        </ProductsContext.Provider>
        </BrowserRouter>)
        const leftSlider = screen.getByTestId("left-slider")
        const rightSlider = screen.getByTestId("right-slider")
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")
        expect(await screen.findAllByTestId("banner")).toHaveLength(1)
        expect(leftSlider).toBeInTheDocument()
        expect(rightSlider).toBeInTheDocument()
    })
    
    test("should toggle image on left slider click", async() => {
        const productState = {bannerData: [{bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        bannerImageUrl: "images/offers/offer1.webp",
        bannerImageUrlSmall: "images/offers/offer1_small.webp",
        id: "5b6c38156cb7d770b7010ccc",
        isActive: true,
        order: 1},{bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        bannerImageUrl: "images/offers/offer2.webp",
        bannerImageUrlSmall: "images/offers/offer2_small.webp",
        id: "5b6c38336cb7d770b7010ccd",
        isActive: true,
        order: 2}],
        categoryData: [{description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "images/category/beverages.webp",
        imageUrlSmall: "images/category/beverages_small.webp",
        key: "beverages",
        name: "Beverages",
        order: 3}]
    }
       render(<BrowserRouter><ProductsContext.Provider value = {{ productState}}><Home /></ProductsContext.Provider></BrowserRouter>)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")
        const leftSlider = screen.getByTestId("left-slider")
        await userEvent.click(leftSlider)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer2.webp")
        await userEvent.click(leftSlider)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")
    })
    test("should toggle image on right slider click", async() => {
        const productState = {bannerData: [{bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        bannerImageUrl: "images/offers/offer1.webp",
        bannerImageUrlSmall: "images/offers/offer1_small.webp",
        id: "5b6c38156cb7d770b7010ccc",
        isActive: true,
        order: 1},{bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        bannerImageUrl: "images/offers/offer2.webp",
        bannerImageUrlSmall: "images/offers/offer2_small.webp",
        id: "5b6c38336cb7d770b7010ccd",
        isActive: true,
        order: 2}],
        categoryData: [{description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "images/category/beverages.webp",
        imageUrlSmall: "images/category/beverages_small.webp",
        key: "beverages",
        name: "Beverages",
        order: 3}]
    }
       render(<BrowserRouter><ProductsContext.Provider value = {{ productState}}><Home /></ProductsContext.Provider></BrowserRouter>)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")
        const rightSlider = screen.getByTestId("right-slider")
        await userEvent.click(rightSlider)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer2.webp")
        await userEvent.click(rightSlider)
        expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")

    })
    test("should toggle image on bubble button click", async() => {
        const productState = {bannerData: [{bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
        bannerImageUrl: "images/offers/offer1.webp",
        bannerImageUrlSmall: "images/offers/offer1_small.webp",
        id: "5b6c38156cb7d770b7010ccc",
        isActive: true,
        order: 1},{bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
        bannerImageUrl: "images/offers/offer2.webp",
        bannerImageUrlSmall: "images/offers/offer2_small.webp",
        id: "5b6c38336cb7d770b7010ccd",
        isActive: true,
        order: 2}],
        categoryData: [{description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "images/category/beverages.webp",
        imageUrlSmall: "images/category/beverages_small.webp",
        key: "beverages",
        name: "Beverages",
        order: 3}]
        
    }
    render(<BrowserRouter><ProductsContext.Provider value = {{ productState}}><Home /></ProductsContext.Provider></BrowserRouter>)
    const bubbleButton = screen.getAllByTestId("banner")
    await userEvent.click(bubbleButton[0])
    expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer1.webp")
    await userEvent.click(bubbleButton[1])
    expect(screen.getByAltText("offer banner")).toHaveAttribute("src", "images/offers/offer2.webp")

    })
})