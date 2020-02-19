import bannerTemplate from '../partials/banner.hbs'
import HttpRequest from './httpRequest'
import {
  renderHTML
} from './utils'
class Banners {
  constructor() {
    this.callBanners()
  }

  callBanners = () => {
    const AJAX = new HttpRequest('GET', `${process.env.API_URL}categories`, '')
    AJAX.customAjax()
    .then(result => {
      renderHTML('banner-container', bannerTemplate, result)
      document.getElementById('loader').style.display = 'none'
    })
    .catch(function (error) {
      console.log('Something went wrong', error)
    })
  }

}
export default Banners
