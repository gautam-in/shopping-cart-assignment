import bannerTemplate from '../partials/banner.hbs'
import HttpRequest from './httpRequest'
import {
  renderHTML
} from './utils'


/**
* Creates a new Banner.
* @class Banners
* @classdesc calls the banners api to fetch banner on the home page.
*/
class Banners {
  /**
  * @constructs Banners
  */
  constructor() {
    this.callBanners()
  }

  /**
  * @function callBanners
  * creates a http request to the api
  */
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
