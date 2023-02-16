import queryData from "@/src/utils/queryData";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import styles from "./ProductsFilter.module.scss";

export default function ProductsFilter({
  selectedCategory,
  selectedFilterCategory,
  setSelectedFilterCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Please Choose Category..."
  );

  const router = useRouter();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: queryData,
  });

  const validCategories = useMemo(
    () =>
      categories
        .sort((a, b) => a.order - b.order)
        .filter((item) => item.enabled),
    [categories]
  );

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(e.target.dataset.name);
    setSelectedFilterCategory(e.target.dataset.id);
    router.push(`/products?category=${e.target.dataset.key}`, undefined, {
      shallow: true,
    });
  };

  const handleSelectFilterClick = (e) => {
    handleFilterClick(e);
    setIsOpen(!isOpen);
  };

  const presetFilter = (preSelectedCategory) => {
    if (preSelectedCategory) {
      const item = validCategories.find(
        (item) => item.key === preSelectedCategory
      );

      if (item) {
        setSelectedFilterCategory(item.id);
        setSelectedOption(item.name);
      }
    } else {
      setSelectedFilterCategory(null);
      setSelectedOption("Please Choose Category...");
    }
  };

  useEffect(() => {
    presetFilter(selectedCategory);
  }, []);

  useEffect(() => {
    router.beforePopState(({ url }) => {
      const categoryKey = url?.split("?")[1]?.split("=")[1];
      presetFilter(categoryKey);
      return true;
    });
  }, []);

  return (
    <>
      <div className={styles.sideFilter} onClick={handleFilterClick}>
        {validCategories.map((item) => (
          <a
            key={item.id}
            data-id={item.id}
            data-name={item.name}
            data-key={item.key}
            href={`#${item.name}`}
            className={
              item.id === selectedFilterCategory
                ? styles.activeFilterItem
                : styles.filterItem
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
              data-name={item.name}
              data-key={item.key}
              href={`#${item.name}`}
              className={
                item.id === selectedFilterCategory
                  ? styles.contentItemHide
                  : styles.contentItem
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
