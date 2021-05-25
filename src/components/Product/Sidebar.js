import { memo } from "react";
import { useSelector } from "react-redux";
import { Container } from "./Sidebar.styles";

const Sidebar = () => {
  const { categories } = useSelector((state) => state.home);
  console.log({ categories });
  return (
    <Container>
      {categories.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Container>
  );
};

export default memo(Sidebar);
