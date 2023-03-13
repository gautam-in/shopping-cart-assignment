import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  console.log('handler : ',req.body, req.query.param, req.cookies )
  const jsonDirectory = path.join(process.cwd(), req.query.param);
  console.log('jsonDirectory ', jsonDirectory);
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/index.get.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}