import queryData from "@/src/utils/queryData";
import { useQuery } from "react-query";
import Card from "./Card";

export default function Categories() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: queryData,
  });

  const validCategories = categories
    .sort((a, b) => a.order - b.order)
    .filter((item) => item.order > 0);

  return (
    <section>
      {validCategories.map((item, index) => (
        <Card key={item.id} item={item} index={index} />
      ))}
    </section>
  );
}
