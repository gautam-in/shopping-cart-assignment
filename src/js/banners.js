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
    const source = document.getElementById('carousel')
    console.log(source.innerHTML);
    var template = Handlebars.compile(source);
    Handlebars.registerHelper('fullName', function(person) {
      return person.firstName + " " + person.lastName;
    });
  }
}
export default Banners
