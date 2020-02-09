import mongoose from 'mongoose';

const URI =
  'mongodb+srv://admin:jfyq38002@cluster0-zsbpg.mongodb.net/test?retryWrites=true&w=majority';

const connect = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

mongoose.Promise = global.Promise;

export default connect;
