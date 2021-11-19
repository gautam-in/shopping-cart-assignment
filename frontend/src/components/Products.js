import { useEffect, useState } from "react";
import axios from 'axios';
import Category from "./Category";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categoryLinks, setCategoryLinks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    LoadProducts();
  }, []);
  // useEffect(() => {
  //   console.log(loaded)
  // }, [loaded])

  const LoadProducts = async () => {
    await axios.get('http://localhost:8888/products')
      .then(resp => {
        setProducts(resp.data);
        //console.log(resp.data);
        const carlist = new Set();
        resp.data.map(item => {
          carlist.add(item.category);
        });
        //console.log(carlist);
        setCategoryLinks((prev) => ([...prev, ...carlist]));
        setLoaded(true);
      });
  }
  //console.log(categoryLinks);
  return (
    <>
      {/* <SideNavStyles>
        <SideNav categoryLinks={categoryLinks} />
      </ SideNavStyles> */}

      <Category />


    </>
  );
}