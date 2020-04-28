import Project from '../models/Project';

class ProjectController {
  async index(req, res) {
    try {
      const project = await Project.find().populate(['logo', 'agency']);
      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async show(req, res) {
    const { slug } = req.params;
    try {
      const project = await Project.findOne({ slug }).populate(['agency']);

      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async store(req, res) {
    try {
      const project = await Project.create(req.body);

      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const project = await Project.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const project = await Project.findByIdAndRemove(id);

      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }
}
export default new ProjectController();
