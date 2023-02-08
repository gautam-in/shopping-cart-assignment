require('../common')
require('../../views/pages/home/index.hbs')
const Splide = require('@splidejs/splide/dist/js/splide.min')
require('./index.scss')

new Splide('.splide', {
    type: 'slide',
    rewind: true,
    pagination: true,
    isNavigation: false,
    arrows: false,
    autoplay: true,
    speed: 1500,
    classes: {
        page: 'splide__pagination__page home-page-banner',
    },
}).mount()
