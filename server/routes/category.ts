import express, { Request, Response } from 'express';

import { getJson } from '../util';

const routes = express.Router();

routes.get('/categories', (req: Request, res: Response) => {
  const categories = getJson('categories', 'get');
  res.status(200).json(categories);
});

export const categoryRoutes = routes;
