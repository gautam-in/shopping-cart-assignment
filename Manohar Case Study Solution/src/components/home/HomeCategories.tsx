import { useEffect, useState } from "react";
import Category from "./Category";

interface Categories {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
}

const HomeCategories: React.FC = () => {
  const [data, setData] = useState<Categories[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((res: Categories[]) => {
        //console.log(res);
        res.sort((a, b) => {
          return a.order - b.order;
        });
        setData(res.filter((a) => a.order > 0));
      });
  }, []);

  return (
    <div>
      {data.map((slide, i) => {
        return <Category key={slide.key} data={slide} />;
      })}
    </div>
  );
};

export default HomeCategories;
