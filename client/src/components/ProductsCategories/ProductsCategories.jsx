import { useHistory } from "react-router-dom";
import CategoryContent from "../CategoryContent/CategoryContent";
import Image from "../UI Components/Image/Image";
import classes from "./ProductsCategories.module.css";

const ProductsCategories = ({ categories }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/products?product=${id}`);
  };

  return (
    <>
      {categories.map((category, index) => {
        return (
          <section key={category.id} className={classes.container}>
            {index % 2 !== 0 ? (
              <>
                <Image
                  source={category.imageUrl}
                  alt={`${category.name} image`}
                />
                <CategoryContent
                  className={classes.container__content}
                  heading={category.name}
                  text={category.description}
                  category={category.key}
                  id={category.id}
                  handleClick={handleClick}
                />
              </>
            ) : (
              <>
                <CategoryContent
                  className={classes.container__content}
                  heading={category.name}
                  text={category.description}
                  category={category.key}
                  id={category.id}
                  handleClick={handleClick}
                />
                <Image
                  source={category.imageUrl}
                  alt={`${category.name} image`}
                />
              </>
            )}
          </section>
        );
      })}
    </>
  );
};

export default ProductsCategories;
