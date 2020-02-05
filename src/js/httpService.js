class HttpRequest {
  constructor(method, url) {
    this.method = method
    this.url = url
  }
  
  makeCall = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(this.method, this.url, true)
    xhr.onload =  function(e) {
      console.log(e)
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          return JSON.parse(xhr.responseText)
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.onerror = function(e) {
      console.log(e);
      console.error(xhr.statusText)
    }
    xhr.send(null);
  }
}
export default HttpRequest
