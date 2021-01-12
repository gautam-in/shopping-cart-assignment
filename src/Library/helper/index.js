class BaseHelper {

  /**
   * @desc To get absolute url of image options
   *
   * @return {String} image url
   *
   */
  getImagePath(path) {
    const imagePath = `${this.getRootUrl()}/assets${path}`;
    return imagePath;
  };

  /**
   * @desc To get root url of current domain
   *
   * @return root url
   *
   */
  getRootUrl() {
    return window.location.origin;
  };

  /**
   * @desc To return first letter of each word in upper case
   * @param string
   *
   * @return string
   *
   */
  ucFirst = (string) => {
    if (!string) {
      return "";
    }
    const arrayString = string.split(" ");

    let finalString = "";
    arrayString.map(str => {
      finalString += str.charAt(0).toUpperCase() + str.slice(1) + " ";
      return null;
    });

    return finalString;
  };
}

export default new BaseHelper();
