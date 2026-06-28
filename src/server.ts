import express from 'express';
const app = express();
const port = 3000;


// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(), service: 'Habit Tracker API' });
});

// export for the test
export {app}

// default export for convinience
export default app