class HttpRequest {
  constructor(method, url) {
    this.method = method
    this.url = url
  }
  
  makeCall = () => {
    const xhr = new XMLHttpRequest();
    let response = null
    xhr.open(this.method, this.url, true)
    xhr.onload = function(e) {
      console.log(e)
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          response = xhr.responseText
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.onerror = function(e) {
      console.error(xhr.statusText)
    }
    xhr.send(null);
    console.log(response);
    return response
  }
}
export default HttpRequest


customAjax = (url, method, data) => {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}
