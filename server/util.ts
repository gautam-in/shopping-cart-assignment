import * as fs from 'fs';
import { join as pathJoin } from 'path';

export const getJson = (folderName: string, method: string) =>
  JSON.parse(
    fs.readFileSync(
      pathJoin(
        __dirname,
        process.env.NODE_ENV === 'development'
          ? `${folderName}/index.${method}.json`
          : `../${folderName}/index.${method}.json`
      ),
      'utf8'
    )
  );
