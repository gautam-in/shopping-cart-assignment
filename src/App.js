import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const clickHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      Welcome to Sabka Bazaar
      <button onClick={clickHandler}>Fetch Products</button>
      {products.map(({ name, id }) => {
        return <p key={id}>{name}</p>;
      })}
    </div>
  );
}

export default App;
