var express = require("express");
var router = express.Router();

/* GET categories for Home page. */
router.get("/categories", function (req, res, next) {
  const data = [
    {
      name: "Beverages",
      key: "beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      enabled: true,
      order: 3,
      imageUrl: "/images/category/beverages.png",
      id: "5b675e5e5936635728f9fc30",
    },
    {
      name: "Bakery Cakes and Dairy",
      key: "bakery-cakes-dairy",
      description:
        "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
      enabled: true,
      order: 2,
      imageUrl: "/images/category/bakery.png",
      id: "5b6899123d1a866534f516de",
    },
    {
      name: "Beauty and Hygiene",
      key: "beauty-hygiene",
      description:
        "Buy beauty and personal care products online in India at best prices.",
      enabled: true,
      order: 4,
      imageUrl: "/images/category/beauty.png",
      id: "5b68994e3d1a866534f516df",
    },
    {
      name: "Baby Care",
      key: "baby",
      description:
        "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
      enabled: true,
      order: 5,
      imageUrl: "/images/category/baby.png",
      id: "5b6899683d1a866534f516e0",
    },
    {
      name: "Seafood",
      key: "seafood",
      description: "Great place to buy fresh seafood.",
      enabled: false,
      order: -1,
      id: "5b68997d3d1a866534f516e1",
    },
    {
      name: "Fruits & Vegetables",
      key: "fruit-and-veg",
      description: "A variety of fresh fruits and vegetables.",
      enabled: true,
      order: 1,
      imageUrl: "/images/category/fruits.png",
      id: "5b6899953d1a866534f516e2",
    },
  ];
  res.status(200).json(data);
});

module.exports = router;
