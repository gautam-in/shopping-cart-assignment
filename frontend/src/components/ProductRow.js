import { RowStyles, DescriptionStyles } from "./styles/productRowStyles";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ProductRow() {
  const [category, setCategory] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8888/categories')
      .then(data => {
        setCategory(data);
        //console.log(data);
      });
  }, [])

  return (
    <div>
      {category.data?.map((item, index) => (
        <RowStyles key={item.id} oddEven={index}>
          <img src={item.imageUrl} alt={item.name} />
          <DescriptionStyles>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link to={`/products/${item.id}`}>Explore {item.name}</Link>
          </DescriptionStyles>
        </RowStyles>
      ))
      }
    </div >
  );
}