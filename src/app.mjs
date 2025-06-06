import express from 'express';
import dotenv from 'dotenv';
import errorHandeler from './middleware/errorHandler.mjs';
import blockchainRouter from './routes/blockchain-routes.mjs';
import { logger } from './middleware/logger.mjs';

dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(logger);
}

app.use(express.json());
app.use('/api/v1/blocks', blockchainRouter);
app.use(errorHandeler);

export { app };
