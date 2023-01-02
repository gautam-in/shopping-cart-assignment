import { useEffect, useState } from "react";
import { Category, getCategories } from "../apis/category";

interface Props {
  checkboxClickHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    category: Category
  ) => void;
}

export const Sidebar: React.FC<Props> = ({ checkboxClickHandler }) => {
  const [categories, setCategories] = useState<{ [key: string]: Category }>({});

  useEffect(() => {
    getCategories()
      .then((_) => {
        setCategories(
          _.reduce((acc, currCategory) => {
            acc[currCategory.id] = currCategory;
            return acc;
          }, {} as { [key: string]: Category })
        );
      })
      .catch(console.log);
  }, []);

  return (
    <aside
      style={{
        flexBasis: "18%",
        border: "1px solid #ccc",
        padding: "20px 0 20px 20px",
      }}
    >
      <ul style={{ paddingBottom: "10px" }}>
        <strong>Categoies</strong>
      </ul>
      <form
        onSubmit={(_) => {
          _.preventDefault();
          _.stopPropagation();
        }}
      >
        {Object.values(categories).map((category) => (
          <li
            style={{ listStyle: "none", paddingBottom: "5px" }}
            key={category.key}
          >
            <input
              type="checkbox"
              id={category.id}
              style={{ marginRight: "10px" }}
              onChange={(_) => {
                checkboxClickHandler(_, category);
              }}
            />
            <label htmlFor={category.id}>{category.name}</label>
          </li>
        ))}
      </form>
    </aside>
  );
};
