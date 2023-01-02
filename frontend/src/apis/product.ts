import Axios from "axios"

export interface Product {
  category: string
  description: string
  id: string
  imageURL: string
  name: string
  sku: string
  price: number
  stock: number
}

export const getProducts = (): Promise<Product[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Axios.get<Product[]>("/products")
      resolve(response.data as Product[])
    } catch (error) {
      console.log(error)
      reject("Failed to fetch products")
    }
  })
}
