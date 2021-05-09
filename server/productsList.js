import productsJSON from "/server/products/index.get.json";
import categoriesJSON from "/server/categories/index.get.json";
import bannersJSON from "/server/banners/index.get.json";

export const banners = () =>
  new Promise((resolve, reject) => {
    console.log("Custom banners promise service");
    resolve(bannersJSON);
    reject("ERROR: Error fetching banners.");
  });

export const products = () =>
  new Promise((resolve, reject) => {
    console.log("Custom products promise service");
    resolve(productsJSON);
    reject("ERROR: Error fetching products.");
  });

export const categories = () =>
  new Promise((resolve, reject) => {
    console.log("Custom categories promise service");
    resolve(categoriesJSON);
    reject("ERROR: Error fetching categories.");
  });
