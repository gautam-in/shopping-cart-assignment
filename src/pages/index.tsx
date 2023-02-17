import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories/Categories";
import RootLayout from "../layouts/Layout";

export default function HomePage() {
  return (
    <RootLayout>
      <Carousel />
      <Categories />
    </RootLayout>
  );
}
