import Axios from "axios"

export interface Banner {
  bannerImageAlt: string
  bannerImageUrl: string
  id: string
  isActive: boolean
  order: number
}

export const getBanners = (): Promise<Banner[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await Axios.get<Banner[]>("/banners")
      resolve(response.data as Banner[])
    } catch (error) {
      console.log(error)
      reject("Failed to fetch banners")
    }
  })
}
