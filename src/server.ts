import express from 'express';
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

app.post("/api/v1/habits", (req, res) => {
    // Logic to create a new habit
    res.status(201).json({ message: "Habit created successfully" });
});

app.get("/api/v1/habits", (req, res) => {
    // Logic to retrieve all habits
    res.status(200).json({ habits: [] });
});

// export for the test
export { app }

// default export for convinience
export default app