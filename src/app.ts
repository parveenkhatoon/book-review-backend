import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';
import { connectDB } from './db';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
const swaggerSpec = swaggerJsDoc({
  definition: { openapi: '3.0.0', info: { title: 'Book Review API', version: '1.0.0' } },
  apis: ['./src/routes/*.ts'],
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;