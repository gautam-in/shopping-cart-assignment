const theme = {
  black: '#000',
  white: '#fff',
  darkgrey: ' #777',
  grey: '#7f8c8d',
  lightgrey: '#ccc',
  lightestgrey: '#eee',
  magenta: '#c02345',
  maxWidth: 1140,
  headerHeight: 100,
  sideNavWidth: 230,
  productTileDesktopWidth: (({theme}) => (theme.maxWidth - theme.sideNavWidth) / 5),
  productTileTabletWidth:(({theme}) => (theme.maxWidth - theme.sideNavWidth) / 5),
  productTileHeight: 450,
  footerHeight: 50,
};

export default theme;
