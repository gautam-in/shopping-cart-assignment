import { ProductCard } from ".";
import { Box } from "../../atoms";

export default {
  title: "Molecules/ProductCard",
};

const sampleProduct = {
  category: "5b6899953d1a866534f516e2",
  description:
    "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
  id: "5b6c6a7f01a7c38429530883",
  imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
  name: "Fresho Kiwi - Green, 3 pcs",
  price: 87,
  sku: "fnw-kiwi-3",
  stock: 50,
};

export const Default = () => (
  <Box
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      columnGap: "1.5rem",
      rowGap: "3rem",
    }}
  >
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
    <ProductCard product={sampleProduct} />
  </Box>
);
