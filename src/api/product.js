import { getRequest } from '../utils/apiHelper';

export const fetchProducts = () => getRequest('/products');