class BaseHelper {

  /**
   * @desc To return first letter of each word in upper case
   * @param string
   *
   * @return string
   *
   */
  ucFirst = function ucFirst(string) {
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
