import { app } from './server.ts';
import { env } from '../env.ts';


const server = app.listen(env.PORT, () => {
    console.log(`Server is running at http://localhost:${env.PORT}`);
});

// server.setTimeout(50000)