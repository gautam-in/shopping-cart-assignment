import { getRequest } from '../utils/apiHelper';

export const fetchCategories = () => getRequest('/categories');