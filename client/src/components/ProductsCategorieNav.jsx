import "../assets/styles/components/ProductsCategorieNav.scss";

const ProductsCategorieNav = ({ selectedText, handleSelect, options }) => {
  return (
    <div className="products-categorie-nav">
      <nav aria-label="products categories menu">
        <ul className="category-list">
          {options.map((option) => (
            <li
              key={option.id}
              className={`category-list-item ${
                option.name === selectedText ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSelect(option);
                }
              }}
            >
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductsCategorieNav;
