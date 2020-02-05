class Banners {
  constructor() {
    
  }
  
  callBannersApi = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    var oReq = new XMLHttpRequest();
    oReq.onload = function(e) {
      var arraybuffer = oReq.response;
      console.log(arraybuffer);
    }
    oReq.open("GET", url);
    oReq.responseType = "arraybuffer";
    oReq.send()
  }
  
}
export default Banners
