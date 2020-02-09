import Project from '../models/Project';

class ProjectController {
  async store(req, res) {
    try {
      const project = await Project.create(req.body);
      return res.send(project);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }
}
export default new ProjectController();
