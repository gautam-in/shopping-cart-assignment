import { useState } from "react";
import { Categories } from "./Products";

interface ListItem {
  category: Categories;
  key: number;
  onClick: (val: string) => void;
}

const Sidebar: React.FC<ListItem> = (props) => {
  const [highlight, setHighlight] = useState(false);

  const highlightLi = highlight ? "highlight" : "";
  return (
    <li
      className={highlightLi}
      onClick={() => {
        setHighlight(!highlight);
        props.onClick(props.category.id);
      }}
    >
      {props.category.name}
    </li>
  );
};

export default Sidebar;
