import express from 'express';
import cors from 'cors';
import './db/server.js';
import authRouter from './routes/authRouter.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import postsRouter from './routes/postRouter.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:5174', credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on http://localhost${PORT}`));