export interface BannerProps {
    bannerImageAlt?: string
    bannerImageUrl?: string
    id?: string
    isActive: boolean
    order?: number
}

export interface CategoryProps {
    description: string
    enabled?: boolean
    id: string
    imageUrl: string
    key: string
    name: string
    order?: number
}
export type BannerType = {
    bannerImageAlt?: string
    bannerImageUrl?: string
    id?: string
    isActive: boolean
    order?: number
}
export type CategoryType = {
    description: string
    enabled?: boolean
    id: string
    imageUrl: string
    key: string
    name: string
    order?: number
}

export type ProductType = {
    category: string
    description: string
    id: string
    imageURL: string
    name: string
    price: number
    sku: string
    stock: number
    qty:number
}

export interface BannerCategoryProps {
    bannersImage?: BannerType[],
    category?: CategoryType[]
}

export interface StoreStateProps{
 user:{
    loading: boolean,
    loggedIn: boolean,
    shoppingCart?: ProductType[],
    products?: ProductType[],
    category?: CategoryType[],
    banner?: BannerType[],
    order?: number,
 }  
}

export interface ProductProps{
    product: ProductType[]
}