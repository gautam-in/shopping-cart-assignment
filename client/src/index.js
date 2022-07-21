// import '../styles/index.css';

const loadProducts = async () => {
  try {
    const res = await Promise.all([
      fetch("http://127.0.0.1:5500/client/db.json"),
      // fetch("http://127.0.0.1:5500/db.json.products"),
    ]);
    const json = await Promise.all([
      res[0].json(),
      // res[1].json(),
    ]);

    // const prod = json[0].products;
    const cat = json[0].categories;

    // console.log(prod);
    console.log(json[0].categories[0]);

    const catSection = document.getElementById("categories");

    // display Category
    for (let i = 0; i < cat.length; i++) {
      const element = cat[i];
      const itemsDiv = document.createElement("div");

      itemsDiv.className = "categories__item";

      itemsDiv.innerHTML = `
            <div>
            <img src="${element.imageUrl}" alt="${element.name} Image" />
            </div>
                <div><h2>${element.name}</h2>
                <p>${element.description}</p>
                <button>Explore ${element.key}</button></div>
            `;

      catSection.appendChild(itemsDiv);
    }

    console.log(json);
  } catch (error) {}
};

loadProducts();
