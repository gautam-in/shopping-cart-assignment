class HomeState {
  constructor() {}

  reRender = () => {
    const exploreBtn = document.querySelectorAll("#explore-product-btn");
    exploreBtn.forEach((ex) => {
      ex.addEventListener("click", function (e) {
        const key = e.target.getAttribute("data-label");
        const url = `${window.location.origin}/#/productlist/${key}`;
        // window.history.pushState({}, "", url);
        // window.location = url;
        window.location.assign(url);
        window.location.reload();
      });
    });
  };
}

export default HomeState;
