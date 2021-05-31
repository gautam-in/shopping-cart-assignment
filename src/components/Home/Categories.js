import { memo } from "react";
import CategoryItem from "components/Home/CategoryItem";
import { Container } from "./Categories.styles";

const Categories = ({ data }) => {
  return (
    <Container>
      {data.map((item, i) => (
        <CategoryItem key={item.key} item={item} index={i} />
      ))}
    </Container>
  );
};

export default memo(Categories);
