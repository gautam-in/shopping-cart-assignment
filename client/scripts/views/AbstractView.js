export default class AbstractView {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  getTemplate() {
    return null;
  }
}
