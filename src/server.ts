import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors, { type CorsOptions } from "cors";
import helmet from "helmet";
import { v1Router } from './routes/v1/index.ts';
import morgan from 'morgan';
import { isTest } from '../env.ts';
import { errorHandler } from './middleware/errorHandler.ts';
const app = express();

// const apiTimeout = 10 * 1000;
// app.use((req, res, next) => {
//     // Set the timeout for all HTTP requests
//     req.setTimeout(apiTimeout, () => {
//         let err = new Error('Request Timeout');
//         res.status(408);
//         next(err);
//     });
//     // Set the server response timeout for all HTTP requests
//     res.setTimeout(apiTimeout, () => {
//         let err = new Error('Service Unavailable');
//         res.status(503);
//         next(err);
//     });
//     next();
// });

// middlewares
app.use(morgan('dev', {
    skip: () => isTest() // when test we don't want the log to be shown.
}))
app.use(helmet());
const corsOptions: CorsOptions = {
    origin: ["https://localhost"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(), service: 'Habit Tracker API' });
});

app.use("/api/v1", v1Router);

// 404 handler for API routes
app.use("/api/v1/*path", (req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.originalUrl}`,
        timestamp: new Date().toISOString(),
    })
})

app.use(errorHandler)

// export for the test
export { app }

// default export for convinience
export default app