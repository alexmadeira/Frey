import mongoose from 'mongoose';

const AgencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  roleDescription: {
    type: String,
  },
  enter: {
    type: Date,
  },
  exit: {
    type: Date,
  },
  logo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Agency = mongoose.model('Agency', AgencySchema);

export default Agency;
