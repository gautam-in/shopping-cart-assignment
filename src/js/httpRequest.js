class HttpRequest {
  constructor(method,url,data) {
    this.method = method
    this.url = url
    this.data = data
  }

  customAjax = () => {
    const url = this.url
    const method = this.method
    const data = this.data

    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest()
      request.responseType = 'json'
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            resolve(request.response)
          } else {

            reject(Error(request.status))
          }
        }
      }
      request.onerror = function() {
        reject(Error("Network Error"))
      }
      request.open(method, url, true)
      request.send(data)
    })
  }
}

export default HttpRequest
