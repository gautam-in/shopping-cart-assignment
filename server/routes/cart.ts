import express, { Request, Response } from 'express';

import { getJson } from '../util';

const routes = express.Router();

routes.get('/cart', (req: Request, res: Response) => {
  const cart = getJson('add-to-cart', 'post');
  res.status(200).json(cart);
});

export const cartRoutes = routes;
