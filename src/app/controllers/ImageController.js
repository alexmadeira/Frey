import Image from '../models/Image';

class ImageController {
  async store(req, res) {
    try {
      const image = await Image.create(req.body);
      return res.send(image);
    } catch (error) {
      return res.status(400).send({ erro: error });
    }
  }
}
export default new ImageController();
