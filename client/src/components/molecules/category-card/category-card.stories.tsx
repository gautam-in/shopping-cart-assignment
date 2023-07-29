import { Box } from "../../atoms";
import { CategoryCard } from ".";

export default {
  title: "Molecules/CategoryCard",
};

const category = {
  name: "Beverages",
  key: "beverages",
  description:
    "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
  enabled: true,
  order: 3,
  imageUrl: "/static/images/category/beverages.png",
  id: "5b675e5e5936635728f9fc30",
};

export const Default = () => (
  <Box
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "3rem",
    }}
  >
    <CategoryCard category={category} />
    <CategoryCard category={category} direction="row-reverse" />
  </Box>
);
