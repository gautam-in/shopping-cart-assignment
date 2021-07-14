/* 
 This Class is defined with the fetch function
 which are required to call the data fom server
*/

export default class RequestsHandler {
  static async getData(url, callback) {
    await fetch(url)
      .then((response) => response.json())
      .then((responseJson) => callback(responseJson));
  }
}
