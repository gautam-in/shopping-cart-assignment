export interface Category {
  name: string
  key: string
  description: string
  enabled: boolean
  order: number
  imageUrl: string
  id: string
}

export interface Product {
  name: string
  imageURL: string
  description: string
  price: number
  stock: number
  category: string
  sku: string
  id: string
}
