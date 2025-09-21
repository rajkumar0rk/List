import express from 'express';
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import { errorHandler } from './middlewares/errorHandler';
import connectDB from './config/db';
import mobileRoute from './routes/mobile.route'


dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())


connectDB(process.env.Mongoose_URL as string)
app.get("/", (req, res) => {
    res.send("Hello Worlds")
});

app.use('/api/v1/mobile', mobileRoute)

app.use(errorHandler)

export default app;
