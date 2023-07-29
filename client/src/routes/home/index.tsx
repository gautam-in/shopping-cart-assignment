import { useLoaderData } from "react-router-dom";

import { type Category } from "../../components/molecules/category-card";
import { CategoriesGrid } from "../../components/templates/categories-grid";

export function Component() {
  const categories = useLoaderData() as Category[];

  return <CategoriesGrid categories={categories} />;
}

Component.displayName = "HomePage";
