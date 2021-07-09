import banners from '../../../server/banners/index.get.json';

export default function handler(req, res) {
    res.status(200).json(banners)
  }