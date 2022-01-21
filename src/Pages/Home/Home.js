import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import ContentSection from "../../Components/ContentSection/ContentSection";
import "./Home.scss";

const categories = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Bakery Cakes and Dairy",
    key: "bakery-cakes-dairy",
    description:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    enabled: true,
    order: 2,
    imageUrl: "images/category/bakery.png",
    id: "5b6899123d1a866534f516de",
  },
  {
    name: "Beauty and Hygiene",
    key: "beauty-hygiene",
    description:
      "Buy beauty and personal care products online in India at best prices.",
    enabled: true,
    order: 4,
    imageUrl: "images/category/beauty.png",
    id: "5b68994e3d1a866534f516df",
  },
  {
    name: "Baby Care",
    key: "baby",
    description:
      "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
    enabled: true,
    order: 5,
    imageUrl: "images/category/baby.png",
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
    imageUrl: "images/category/fruits.png",
    id: "5b6899953d1a866534f516e2",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const sortedCategories = categories.sort((a, b) => a.order - b.order);
  const handleClick = (categoryId) => {
    if (categoryId) {
      navigate(`/products/${categoryId}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <main className="home-container">
      <Carousel />
      {sortedCategories.map((category) => {
        return (
          <ContentSection
            key={category.id}
            id={category.id}
            url={category.imageUrl}
            heading={category.name}
            text={category.description}
            category={category.key}
            order={category.order}
            handleClick={handleClick}
          />
        );
      })}
    </main>
  );
};

export default Home;
