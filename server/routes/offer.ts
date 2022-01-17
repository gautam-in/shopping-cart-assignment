import express, { Request, Response } from 'express';

import { getJson } from '../util';

const routes = express.Router();

routes.get('/offers', (req: Request, res: Response) => {
  const offers = getJson('banners', 'get');
  res.status(200).json(offers);
});

export const offerRoutes = routes;
