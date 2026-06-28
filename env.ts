// For type checking the env varibles and ensure that they are defined before starting the server.

import {env as loadEnv} from 'custom-env';
import {z} from 'zod';

process.env.APP_STAGE = process.env.APP_STAGE || 'dev';

const isProduction = process.env.APP_STAGE === 'production';
const isDevelopment = process.env.APP_STAGE === 'dev';
const isTest = process.env.APP_STAGE === 'test';

if(isDevelopment) {
  loadEnv();
} else if(isTest) {
    loadEnv('test');
} else if(isProduction) {
    loadEnv('production');
}

