export interface CategoryType {
  id: string
  key: string
  name: string
  description: string
  enabled: boolean
  order: number
  imageUrl: string
}

export interface ProductType {
  id: string
  name: string
  description: string
  imageURL: string
  price: number
  category: string
  sku: string
  stock: number
}
