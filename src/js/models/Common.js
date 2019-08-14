export default class Common {
  constructor() {}

  persistData() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('likes'));

    // Restoring likes from the localStorage
    if (storage) this.likes = storage;
  }
}
