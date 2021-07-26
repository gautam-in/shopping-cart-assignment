/* 
 This Class is defined with the fetch function
 which are required to call the data fom server
*/

export default class RequestsHandler {
  static async getData(url) {
    const content = await fetch(url).then((response) => response.json());
    return content;
  }

  static async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    const content = await response.json();

    return content;
  }
}
