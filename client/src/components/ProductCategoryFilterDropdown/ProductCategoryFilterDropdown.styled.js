import styled from "styled-components";

export const ProductCategoryFilterDropdownContainer = styled.div`
    margin-top: 0.8rem;
    width: 100%;
    @media (min-width: 768px) {
        display: none;
    }
.select-dropdown {
  font-weight: 500;
  color: white;
  background-color: #ab4747;
  width: 100%;
  position: relative;
  display: inline-block;
  font-size: 16px;
}
.selected-option {
  cursor: pointer;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.arrow {
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  margin-left: 10px;
}
.down {
  transform: rotate(45deg);
}
.options {
  color: #000;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  /* border-radius: 5px; */
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
}
.option {
  cursor: pointer;
  padding: 10px;
  display: block;
}
.option:hover {
  background-color: #ccc;
}
`  