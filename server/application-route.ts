import {Request, Response} from 'express';
import {LOGIN} from './loginmock/mockLogin';
import {BANNERDATA} from './banners/banners';
import {CATEGORY} from './categories/categories';
import {PRODUCT} from './products/products';
import {ADDTOCART} from './addToCart/addToCart';

export function login(req: Request, res: Response) {
    res.status(200).json(LOGIN);
}
export function banner(req: Request, res: Response) {
    res.status(200).json(BANNERDATA);
}
export function category(req: Request, res: Response) {
    res.status(200).json(CATEGORY);
}
export function products(req: Request, res: Response) {
    res.status(200).json(PRODUCT);
}
export function addToCart(req: Request, res: Response) {
    res.status(200).json(ADDTOCART);
}