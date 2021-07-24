/* 
 This Class is defined with the fetch function
 which are required to call the data fom server
*/

export default class RequestsHandler {
  static async getData(url, callback) {
    if (typeof callback === 'object' && callback !== null) {
      await fetch(url)
        .then((response) => response.json())
        .then((responseJson) =>
          callback.setData({
            ...callback.state.data,
            [callback.name]: responseJson,
          })
        );
    } else {
      await fetch(url)
        .then((response) => response.json())
        .then((responseJson) => callback(responseJson));
    }
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
