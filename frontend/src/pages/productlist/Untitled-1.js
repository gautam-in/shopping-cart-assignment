import "./productlist.scss";

class Render {
  async renderSideList({ label }) {
    return `<li class='item'>${label}</li>`;
  }

  async renderSidebar(listItems) {
    let lPromises = [];
    let ele = [];
    listItems.forEach(async (list) =>
      lPromises.push(this.renderSideList(list))
    );
    await Promise.all(lPromises).then((list) => ele.push(...list));
    return `
      <aside class='product-list-aside'>
        <ul class='list'>
            ${ele.join("")}
        </ul>
      </aside>
    `;
  }
}

const ProductList = {
  render: async () => {
    const H = new Render();
    const sList = [
      {
        label: "Fruits & Vegetables",
      },
      {
        label: "Bakery Cakes and Dairy",
      },
      {
        label: "Beverages",
      },
      {
        label: "Beauty and Hygiene",
      },
      {
        label: "Baby Care",
      },
    ];

    const ele = [await H.renderSidebar(sList)];

    console.log("e", ele);

    return ele.join("");
  },
};

export default ProductList;
