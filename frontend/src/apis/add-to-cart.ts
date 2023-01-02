import Axios from "axios"

export const addToCart = (): Promise<Boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await Axios.post("/addToCart")
      resolve(true)
    } catch (error) {
      console.log(error)
      reject("Failed to add to cart")
    }
  })
}
