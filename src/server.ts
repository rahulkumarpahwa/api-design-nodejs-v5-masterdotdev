import express from 'express';
import { habitRouter } from './routes/habitRoutes.ts';
import { authRouter } from './routes/authRoutes.ts';
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

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(), service: 'Habit Tracker API' });
});

// 
app.use("/api/v1/habits", habitRouter);
app.use("/api/v1/", authRouter);


// export for the test
export { app }

// default export for convinience
export default app