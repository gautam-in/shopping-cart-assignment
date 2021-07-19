import { useEffect } from "react";
import { Container } from "./styled";
import CategoriesCard from "../CategoriesCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/category.action";

export default function Categories() {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Container>
      {categoriesData?.categories?.map((category) => (
        <CategoriesCard categories={category} />
      ))}
    </Container>
  );
}
