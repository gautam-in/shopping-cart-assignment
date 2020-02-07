import HttpRequest  from './HttpService'
class Banners {
  constructor() {
    this.callBanners()

  }
  callBanners = () =>{
    const AJAX = new HttpRequest('GET', `${process.env.API_URL}banner-images`, '')
    AJAX.customAjax()
    .then(result => {
      console.log('data', result)
    })
    .catch(function (error) {
      console.log('Something went wrong', error);
    });
  }
}
export default Banners
