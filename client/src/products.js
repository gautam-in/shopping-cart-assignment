// import '../styles/index.css';

const loadProducts = async () => {
  try {
    const res = await Promise.all([
      fetch("http://127.0.0.1:5500/client/db.json"),
    ]);
    const json = await Promise.all([
      res[0].json(),
      // res[1].json(),
    ]);

    const prod = json[0].products;
    const cat = json[0].categories;

    const productsSection = document.getElementById("products");

    // display asides
    const aside = document.getElementsByTagName("aside");

    for (let i = 0; i < cat.length; i++) {
      const element = cat[i];
      const a = document.createElement("a");
      a.innerHTML = `${element.name}`;
      a.href = `#`;
      aside[0].appendChild(a);
    }

    // display products
    for (let i = 0; i < prod.length; i++) {
      const element = prod[i];
      const itemsDiv = document.createElement("div");

      itemsDiv.className = "products__item";

      itemsDiv.innerHTML = `
                <h2>${element.name}</h2>
                <img src="${element.imageURL}" alt="${element.name} Image" />
                <p>${element.description}</p>
                <span>MRP ${new Intl.NumberFormat("en-IN", {
                  currency: "INR",
                  style: "currency",
                }).format(element.price)}</span>
                <button onClick = fun()>Buy Now</button>
            `;

      productsSection.appendChild(itemsDiv);
    }

    button.className = "add-to-cart";

    console.log(json);
  } catch (error) {}
};

loadProducts();
