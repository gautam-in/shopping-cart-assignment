export type Banner = {
    bannerImageUrl: string;
    bannerImageAlt: string;
    isActive: boolean;
    order: number;
    id: string;
}

export type Category = {
    name: string;
    key: string;
    description: string;
    enabled: boolean;
    order: number;
    imageUrl?: string;
    id: string;
}

export type Product = {
    name: string;
    imageURL: string;
    description: string;
    price: number;
    stock: number;
    qty?: number;
    category: string;
    sku: string;
    id: string;
}

export type ProductGridProps = {
    cartDispatch: React.Dispatch<CartAction>;
}

export type ProductCardProps = {
    product: Product;
    cartDispatch: React.Dispatch<CartAction>;
}

export type HeaderProps = {
    cartSize: number;
    popupProps: PopupProps;
}

export type NavMobileProps = {
    cartSize: number;
}

export type NavProps = {
    cartSize: number;
    popupProps: PopupProps;
}

export type CartProps = {
    cartState: Product[];
    cartDispatch: React.Dispatch<CartAction>;
}

export type PopupProps = {
    cartPopupToggle: boolean;
    setCartPopupToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CartPopupProps = {
    cartProps: CartProps;
    popupProps: PopupProps;
}

export type CartItemProps = {
    product: Product;
    cartDispatch: React.Dispatch<CartAction>;
}

export type CartAction =
 | { type: 'add-item', data: Product }
 | { type: 'remove-item', data: Product }
 | { type: 'update-item-qty', data: Product }