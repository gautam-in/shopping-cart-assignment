
/**
 * Code for load Dyanamic Image Urls without importing each image files
 */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '../images/')] = r(item); });
  return images;
}

/**
 * Use Importall and webpack Require.context('directory', useSubdirectories: boolean, regExp)
 */
export const images = importAll(require.context('../../images/', true, /\.(png|jpe?g|svg)$/));
