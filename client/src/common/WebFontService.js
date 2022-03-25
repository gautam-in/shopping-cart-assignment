import { load as webFontLoader } from 'webfontloader';

const configureWebFontService = () => {
  if (typeof webFontLoader !== 'undefined') {
    webFontLoader({
      google: {
        families: ['Dosis:300,400,500,600,700&display=swap'],
      },
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('WebFont not defined!');
  }
};

export default configureWebFontService;
