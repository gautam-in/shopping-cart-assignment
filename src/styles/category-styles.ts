import { createGlobalStyle } from 'styled-components';

export const CategoryStyle = createGlobalStyle`
.category {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 0;
  box-shadow: 0 4px 3px -3px #a3a3a3;
  margin-bottom: 2rem;
  padding: 20px;
}

.category:nth-child(odd) {
  flex-direction: row;
}


.category:nth-child(even) {
  flex-direction: row-reverse;
}

.category-img {
  flex: 1;
}

.category-info {
  flex: 2;
  text-align: center;
}

.category-title {
  font-weight: bold;
  color: black;
  font-size: 2.5rem;
}

.category-desc {
  padding: 20px 0;
  font-weight: 600;
  font-size: 1.5rem;
}
.category-btn {
  padding: 10px;
  background-color: #c6346c;
  border: none;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.category-img img {
  width: 100%;
}

@media (max-width: 768px) {
  .category-title {
    font-size: 1.2rem
  }
  .category-desc {
    font-size: 0.7rem;
  }
  .category {
    padding-bottom: 8%;
    margin-top: 10%;
  }
}

`;
