import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
  },

  nextProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },

  logo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  background: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  preview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  destaque: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  produtoDestaque: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  destaqueEsquerda: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  destaqueCentro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  destaqueDireita: {
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
