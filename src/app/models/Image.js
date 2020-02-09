import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;
