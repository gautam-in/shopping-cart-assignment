import React from "react";
import Button from "../Button";
import styles from "./Dropdown.module.scss";

export interface SelectOptionType {
  value: string;
  label: string;
}

export interface DropdownProps {
  label: string;
  options: SelectOptionType[];
  onClick: (value: string) => void;
}

const ListItems = ({
  options,
  handleOptionsClick,
}: {
  options: SelectOptionType[];
  handleOptionsClick: (option: SelectOptionType) => void;
}) => {
  return (
    <>
      {options.map(({ label, value }) => (
        <li
          key={value}
          className={styles["dropdown-container--list-item"]}
          onClick={() => {
            handleOptionsClick({ label, value });
          }}
        >
          {label}
        </li>
      ))}
    </>
  );
};

const Dropdown = ({ label, options, onClick }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] =
    React.useState<SelectOptionType | null>(null);

  const handleOptionsClick = (option: SelectOptionType) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onClick(option?.value);
  };
  return (
    <div className={styles["dropdown-container"]}>
      <Button
        className={styles["dropdown-container--btn"]}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{selectedOption ? selectedOption.label : label}</span>
        <span className={styles["dropdown-container--icon"]}>
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </span>
      </Button>

      {isDropdownOpen && (
        <ul className={styles["dropdown-container--list"]}>
          <ListItems
            options={options}
            handleOptionsClick={handleOptionsClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
