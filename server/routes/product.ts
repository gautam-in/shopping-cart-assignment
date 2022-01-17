import express, { Request, Response } from 'express';

import { getJson } from '../util';

const routes = express.Router();

routes.get('/products', (req: Request, res: Response) => {
  const products = getJson('products', 'get');
  res.status(200).json(products);
});

export const productRoutes = routes;
