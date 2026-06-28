// For type checking the env varibles and ensure that they are defined before starting the server.

import { env as loadEnv } from "custom-env";
import { z } from 'zod';

process.env.APP_STAGE = process.env.APP_STAGE || 'dev';

const isProduction = process.env.APP_STAGE === 'production';
const isDevelopment = process.env.APP_STAGE === 'dev';
const isTesting = process.env.APP_STAGE === 'test';

if (isDevelopment) {
    loadEnv('example'); // Load .env.example for development
} else if (isTesting) {
    loadEnv('test'); // Load .env.test for testing
} else if (isProduction) {
    loadEnv('production'); // Load .env.production for production
} 

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    APP_STAGE: z.enum(['dev', 'test', 'production']),
    PORT: z.coerce.number().positive().default(3000),
    DATABASE_URL: z.string().startsWith('postgresql://').min(1),
    JWT_SECRET: z.string().min(32, 'JWT Must be of 32 characters or more'),
    JWT_EXPIRES_IN: z.string().default('7d'),
    BCRYPT_SALT_ROUNDS: z.coerce.number().positive().min(10).max(20).default(12),
})


export type Env = z.infer<typeof envSchema>; // Infer the type of the environment variables from the schema


let env: Env;

try {
    env = envSchema.parse(process.env);
} catch (e) {
    // If the error is a ZodError, log the validation errors and exit the process
    if (e instanceof z.ZodError) {
        console.error('Invalid environment variables:');
        console.error(JSON.stringify(e.flatten().fieldErrors, null, 2));


        e.issues.forEach((issue) => {
            console.error(`- ${issue.path.join(".")} : ${issue.message}`);
        });
        process.exit(1);
    }

    // If the error is not a ZodError, rethrow it
    throw e;
}

// Export the validated env object and utility functions to check the current environment
export const isProd = () => env.APP_STAGE === 'production';
export const isDev = () => env.APP_STAGE === 'dev';
export const isTest = () => env.APP_STAGE === 'test';

export {env};
export default env;
