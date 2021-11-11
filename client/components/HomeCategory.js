import { fetchCategories } from "../Redux/actions/thunk";
import { CategoryArticle } from "../styles/HomeStyle";
import { useEffect } from "react";
import Link from "next/Link";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";

const HomeCategory = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);

  useEffect(() => {
    if (categoryList.length === 0) dispatch(fetchCategories());
  }, []);

  return (
    <>
      {categoryList.length === 0 ? (
        <Error errorMessage="Unable to load products categories" />
      ) : (
        categoryList
          ?.sort((a, b) => a.name - b.name)
          .filter((category) => category.enabled)
          .map((category, index) =>
            index % 2 == 0 ? (
              <CategoryArticle key={category.id}>
                <div>
                  <img src={category.imageUrl} alt={category.name} />
                  <div className="categoryDescription">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <Link
                      href={"/products/" + category.id}
                    >{`Explore ${category.key}`}</Link>
                  </div>
                </div>
              </CategoryArticle>
            ) : (
              <CategoryArticle key={category.id}>
                <div>
                  <div className="categoryDescription">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <Link
                      href={"/products/" + category.id}
                    >{`Explore ${category.key}`}</Link>
                  </div>

                  <img src={category.imageUrl} alt={category.name} />
                </div>
              </CategoryArticle>
            )
          )
      )}
    </>
  );
};

export default HomeCategory;
