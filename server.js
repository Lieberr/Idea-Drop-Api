import express from 'express';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import ideaRouter from './routes/ideaRoutes.js'
import { errorhandler } from './middleware/errorHandler.js';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000

//Connect to mongodb
connectDB();

//CORS CONFIG
const allowedOrigins = [
    'http://localhost:3000',
    'https://ideadrop-glf.vercel.app'
]

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Routes
app.use('/api/ideas', ideaRouter);
app.use('/api/auth', authRouter);

// 404 fallback
app.use((req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error)
})

app.use(errorhandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})