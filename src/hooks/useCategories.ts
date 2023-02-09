import { useEffect, useState } from "react";
import { getCategories, TCategory } from "../apis/categories";

export function useCategories() {
    const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    getCategories().then((res) =>
      setCategories(
        res.sort((a, b) => a.order - b.order).filter((cat) => cat.enabled)
      )
    );
  }, []);
    
    return {categories}
}