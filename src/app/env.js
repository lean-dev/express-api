const path = require('path');
const dotenv = require('dotenv');

const nodeEnv = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, `../../.env.${nodeEnv}`);

dotenv.config({ path: envPath });
dotenv.config();
