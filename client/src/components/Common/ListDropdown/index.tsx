import { useState, useRef, useEffect, FunctionComponent } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./styles.scss";

interface Option {
  value: string;
  label: string;
}

interface ListDropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const ListDropdown: FunctionComponent<ListDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderOptions = () => {
    return options.map((option) => (
      <li
        key={option.value}
        role="option"
        aria-selected={option === selectedOption}
        onClick={() => handleOptionSelect(option)}
      >
        {option.label}
      </li>
    ));
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown__toggle"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span>
          {selectedOption ? selectedOption.label : "Filter a category"}
        </span>
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <ul className="dropdown__list" role="listbox">
          {renderOptions()}
        </ul>
      )}
    </div>
  );
};

export default ListDropdown;
