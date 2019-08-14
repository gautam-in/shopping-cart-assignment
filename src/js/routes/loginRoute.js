export default class Login {
  constructor() {

  }

  loginAttempt(userName, password) {
    const like = {
      id,
      title,
      author,
      img
    };
    this.likes.push(like);

    // Perist data in localStorage
    this.persistData();

    return like;
  }
  persistData() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('likes'));

    // Restoring likes from the localStorage
    if (storage) this.likes = storage;
  }
}
