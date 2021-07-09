import banners from '../../../server/products/index.get.json';

export default function handler(req, res) {
    res.status(200).json(banners)
  }