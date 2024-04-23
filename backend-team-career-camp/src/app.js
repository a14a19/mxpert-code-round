import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from "cors";
import appRouter from './routes/index.js';
import colors from "colors";
import path from "path";
import fs from "fs";

config();
const app = express();

// middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")) // ? remove in production mode

// setting template engine
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'views/js')));
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// app.use("/api/v1", appRouter); // for api purpose
app.use("/team-career-camp", appRouter);

export default app;