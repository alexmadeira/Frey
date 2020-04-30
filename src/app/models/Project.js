import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coteudo: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
  },
  order: {
    type: Number,
    required: true,
  },
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
  },
  logo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
