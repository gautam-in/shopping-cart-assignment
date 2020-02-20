

/**
* Creates a new HttpRequest.
* @class Banners
* @classdesc calls the banners api to fetch banner on the home page.
*/
class HttpRequest {

  /**
  * @constructs HttpRequest
  * @param method - method to make http request for eg. POST,GET
  * @param url - url on which api call to be made
  * @param data - data to be requested
  */
  constructor(method, url, data) {
    this.method = method
    this.url = url
    this.data = data
  }


  /**
  * @function customAjax
  * calls the xhr request
  * @return {Object} data
  */

  customAjax = () => {
    const url = this.url
    const method = this.method
    const data = this.data

    return new Promise(function (resolve, reject) {
      const request = new XMLHttpRequest()
      request.responseType = 'json'
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            resolve(request.response)
          } else {
            reject(Error(request.status))
          }
        }
      }
      request.onerror = function () {
        reject(Error("Network Error"))
      }
      request.open(method, url, true)
      request.send(data)
    })
  }
}

export default HttpRequest
