import {
  APIEndPoints
} from './base'
import {
  RxHR
} from '@akanass/rx-http-request'

export const GETBanners = () => {
  return RxHR.get(APIEndPoints.baseURL + APIEndPoints.banners.URL)
}

export const GETCategories = () => {
  return RxHR.get(APIEndPoints.baseURL + APIEndPoints.categories.URL)
}

export const GETProducts = () => {
  return RxHR.get(APIEndPoints.baseURL + APIEndPoints.products.URL)
}

export const POSTAddToCart = (productId) => {
  const options = {
    body: {
      productId: productId
    },
    json: true
  }
  return RxHR.post(APIEndPoints.baseURL + APIEndPoints.addToCart.URL, options)
}
