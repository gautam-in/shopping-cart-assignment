import React from 'react';
import { fruits,bakeryAndDairy, beverages, beautyProducts, babyCare }  from './CatagoryData'
import { FruitsAndVegetables } from './fruitsAndVeg';
import { Bakery } from './bakery';
import { Beverages } from './beverages';
import { BeautyAndHygiene } from './beautyAndHygiene';
import { BabyCare } from './babyCare';


export default function Catagories(props){
    return (
    <div>
      <div>
        {
         fruits.map((fruit, index) =>  <FruitsAndVegetables  key={index} fruit={fruit} />)
        }
      </div>
      <div>
        {
         bakeryAndDairy.map((bake, index) =>  <Bakery  key={index} bake={bake} />)
        }
      </div>

      <div>
        {
         beverages.map((beverage, index) =>  <Beverages  key={index} beverage={beverage} />)
        }
      </div>

      <div>
        {
         beautyProducts.map((beautyP, index) =>  <BeautyAndHygiene  key={index} beautyP={beautyP} />)
        }
      </div>

      <div>
        {
         babyCare.map((babyC, index) =>  <BabyCare  key={index} babyC={babyC} />)
        }
      </div>
      </div>
    )
}