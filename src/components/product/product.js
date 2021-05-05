import React, { useState, useEffect } from 'react'; 
import { getProductdata, getFilterProductdata } from "../../store/actions";
import { useDispatch, useSelector } from 'react-redux';
  
const Products = (props) =>
{
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getProductdata())
  }, []);
  var productData = useSelector(state => state.indexReducer.productData);
  const [ProductFilteredData, storeProductFilteredData] = useState([]);
  useEffect(() => {
    if(props.category === "all")
    {
      storeProductFilteredData(productData);
    }
    else
    {
      storeProductFilteredData(productData.filter(function(x) { return x.category === props.category}));
    }
}, [productData,props.category]);
  const cartData = useSelector(state => state.indexReducer.cartProduct);
  const [cartFilteredData, storeCartFilteredData] = useState(cartData);
  const cartCount = useSelector(state => state.indexReducer.count);
  var dataSet = productData;
  var count = cartCount;
    const addToCart = (id) => {
      var data = [];
      var data1 = cartData;
      var idFound = false;
      if(data1.length > 0)
      {
        for(let i=0; i<data1.length; i++)
        {
            for(let j=0; j<data1[i].product.length; j++)
            {
              if(data1[i].product[j].id === id)
              {
                count++;
                storeCartFilteredData(data1[i].quantity = data1[i].quantity + 1);
                dispatch(getFilterProductdata(data1, count));
                idFound = true;
              }
            }
        }
      }
     if(!idFound)
      {
        count++;
        data = dataSet.filter(function(x) { return x.id === id});
        data1.push({
          'product' : data,
          'quantity' : 1
        })
        storeCartFilteredData(data1);
        dispatch(getFilterProductdata(data1, count));
      }
    }
  return (
    <>
    <div className="flex-container" id="flexdata" aria-label="product List">
    {ProductFilteredData.map((d, i) => {
      return (
        <div className="flex-item" id={d.id} key={d.id} aria-label={d.name}>
            <h6 className="pro-name"><strong>{d.name}</strong></h6>
            <div className="grid-container">
                <div className="grid-item item_g1">
                  <img className="left-img" src={d.imageURL} alt={d.name} />
                </div>
                <div className="grid-item item_g2">
                  <p>{d.description}</p>
                </div>
                <div className="grid-item item_g3">
                  <h6>MRP RS.{d.price}</h6>
                  <input type="hidden" id="stock" name="stock" value={d.stock} />
                </div>
                <div className="grid-item item_g4">
                  <button type="button" className="btn btn-dark btnwid" onClick={() => addToCart(d.id)}>Buy Now <span className="span-tab">@ RS.{d.price}</span></button>
                </div>
            </div>
        </div>
      );
      })}
        </div>
    </>
  );
}
  
export default Products;