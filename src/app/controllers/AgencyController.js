import Agency from '../models/Agency';

class AgencyController {
  async index(req, res) {
    try {
      const agency = await Agency.find().populate(['logo', 'image']);
      return res.send(agency);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const agency = await Agency.findById(id).populate(['logo', 'image']);
      return res.send(agency);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async store(req, res) {
    try {
      const agency = await Agency.create(req.body);
      return res.send(agency);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    try {
      const agency = await Agency.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      return res.send(agency);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }
}
export default new AgencyController();
