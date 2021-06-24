const getImage = (img) => {
  return require(`static/${img}`).default;
};

export default getImage;
