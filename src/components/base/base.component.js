import { Rerender } from "../constants";

export class BaseComponent {
  viewTemplates = [];
  props = null;
  subscriptions = [];
  constructor(Handlebars, props) {
    this.handleBars = Handlebars;
    this.props = props;
    this.preRender();
  }

  preRender() {}

  rerender(containerRef, template) {
    containerRef.innerHTML = template.render();
    template.postRender();
  }

  render() {
    return "Hello There!";
  }

  postRender() {
    this.viewTemplates.forEach((vt) => vt.postRender());
  }

  onDispose() {
    this.viewTemplates.forEach((vt) => vt.onDispose())
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
