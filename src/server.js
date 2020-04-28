import dotenv from 'dotenv';

import app from './app';
import connectDB from './database';

dotenv.config();

connectDB();

app.listen(process.env.PORT);
