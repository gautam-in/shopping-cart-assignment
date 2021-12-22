export default class AbstractView {
  constructor() {}

  setTitle(title) {
    document.title = title;
  }

  setActiveLinkIndicator(id) {
    document.getElementById(id).classList.add("link-active");
  }

  getTemplate() {
    return null;
  }
}
