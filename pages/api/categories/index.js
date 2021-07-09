import banners from '../../../server/categories/index.get.json';

export default function handler(req, res) {
    res.status(200).json(banners)
  }