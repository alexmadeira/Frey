import Image from '../models/Image';

class ImageController {
  async index(req, res) {
    const { limit } = req.query;
    try {
      const images = await Image.find().limit(parseInt(limit, 10));
      return res.send(images);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async store(req, res) {
    try {
      const image = await Image.create(req.body);
      return res.send(image);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async show(req, res) {
    const { name } = req.params;

    try {
      const image = await Image.findOne({ name });
      return res.send(image);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const image = await Image.findByIdAndRemove(id);

      return res.send(image);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }
}

export default new ImageController();
