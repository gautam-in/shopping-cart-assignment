import queryData from "@/src/utils/queryData";
import { useState } from "react";
import { useQuery } from "react-query";
import styles from "./ProductsFilter.module.scss";

export default function ProductsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Please Choose Category..."
  );

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: queryData,
  });

  const validCategories = categories
    .sort((a, b) => a.order - b.order)
    .filter((item) => item.order > 0);

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e) => {
    setSelectedOption(e.target.id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.sideFilter}>
        {validCategories.map((item) => (
          <a key={item.id} href={`#${item.name}`}>
            {item.name}
          </a>
        ))}
      </div>
      <div className={styles.selectFilter}>
        <button onClick={handleBtnClick} className={styles.ddBtn}>
          <span>{selectedOption}</span>
          {isOpen ? (
            <i className={`${styles.arrow} ${styles.up}`} />
          ) : (
            <i className={`${styles.arrow} ${styles.down}`} />
          )}
        </button>
        <div
          onClick={handleOptionClick}
          className={
            isOpen ? styles.filterContentShow : styles.filterContentHide
          }
        >
          {validCategories.map((item) => (
            <a
              key={item.id}
              id={item.name}
              href={`#${item.name}`}
              className={styles.contentItem}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
