import { useLoaderData } from "react-router-dom";

import { type Category } from "../../components/molecules/category-card";
import { CategoriesGrid } from "../../components/templates/categories-grid";
import { Flex } from "../../components/atoms";
import {
  ImageCarousel,
  type Banner,
} from "../../components/templates/carousel";

export function Component() {
  const { categories, banners } = useLoaderData() as {
    categories: Category[];
    banners: Banner[];
  };

  return (
    <Flex direction="col" gap="md" pt="sm">
      <ImageCarousel banners={banners}></ImageCarousel>
      <CategoriesGrid categories={categories} />
    </Flex>
  );
}

Component.displayName = "HomePage";
