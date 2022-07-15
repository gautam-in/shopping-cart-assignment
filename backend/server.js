import express from "express";
import { config } from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


import { notFound, errorHandler } from './middleware/errorMiddleware.js'

config();
connectDB();

const app = express();
const cacheTime = 86400000 * 30 // the time you want

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/backend/images'), {
  maxAge: cacheTime
}))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running from backend....");
});

app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ports ${PORT}`
  )
);
