import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {
  offerRoutes,
  categoryRoutes,
  productRoutes,
  cartRoutes
} from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.options('*', cors());

app.use(offerRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.use('/', (req: Request, res: Response) => {
  res.status(200).json('Welcome to Sabka Bazar');
});

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT} `));
