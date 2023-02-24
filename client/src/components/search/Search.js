import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./Search.module.scss";

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
      <BiSearch size={18} className={styles.icon} />
      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
        aria-label="Search"
      />
    </div>
  );
};
export default Search;
