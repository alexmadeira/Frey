import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-zsbpg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connect = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

mongoose.Promise = global.Promise;

export default connect;
