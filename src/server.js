import app from './app';
import connectDB from './database';

connectDB();

app.listen(3333);
