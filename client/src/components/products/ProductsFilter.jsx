import queryData from "@/src/utils/queryData";
import { useState } from "react";
import { useQuery } from "react-query";
import styles from "./ProductsFilter.module.scss";

export default function ProductsFilter({
  selectedFilterCategory,
  setSelectedFilterCategory,
}) {
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

  const handleFilterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const option = e.target.dataset.category;
    setSelectedOption(option);
    setSelectedFilterCategory(e.target.dataset.id);
  };

  const handleSelectFilterClick = (e) => {
    handleFilterClick(e);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.sideFilter} onClick={handleFilterClick}>
        {validCategories.map((item) => (
          <a
            key={item.id}
            data-id={item.id}
            data-category={item.name}
            href={`#${item.name}`}
            className={
              item.id === selectedFilterCategory ? styles.activeFilterItem : styles.filterItem
            }
          >
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
          onClick={handleSelectFilterClick}
          className={
            isOpen ? styles.filterContentShow : styles.filterContentHide
          }
        >
          {validCategories.map((item) => (
            <a
              key={item.id}
              data-id={item.id}
              data-category={item.name}
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
