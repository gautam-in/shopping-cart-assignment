import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, useLocation } from "react-router-dom"
import { addProduct } from "../../redux/action";
import { totalProductPrice } from "../../redux/action-constants";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
  const navigate = useNavigate()
  const [datalist, setDatalist] = useState([]);
  const productData = useSelector(state => state.productList.products)
  const dispatch = useDispatch()
  const param = useParams()
  useEffect(() => {
    if (productData.length > 0) {
      if (!param.id) {
        setDatalist(productData)
      } else {
        let dl = productData.filter((e) => e.category == param.id)
        setDatalist(dl)
      }
    }
  }, [param.id])
  const handleProduct = (data) => {
    console.log(data)
    const ldata = localStorage.getItem("user");
    if (ldata) {
      dispatch(addProduct(data))
      dispatch({ type: totalProductPrice })
    } else {
      navigate("/register")
    }

  }

  return (

    <section className="content">
      {
        datalist.length > 0 ? datalist.map((e, i) => {
          return (
            <div className="content-box" key={e.name}>
              <h4>{e.name}</h4>
              <div className="content-img-box">
                <div>
                  <img src={e.imageURL} className="image-res" />
                </div>
                <div>
                  <div>
                    <p>{e.description}</p>
                  </div>
                  <div className="content-footer-mbl">
                    <button className="button">Buy Now @Rs.{e.price}</button>
                  </div>
                </div>
              </div>

              <div className="content-footer">
                <div className="mrp">
                  <h4>MRP Rs.{e.price}</h4>
                </div>
                <div>
                  <button className="button1" onClick={() => handleProduct(e)}>Buy Now</button>
                  <button className="button2" onClick={() => handleProduct(e)}>Buy Now @Rs.{e.price}</button>
                </div>
              </div>

            </div>
          )
        }) : ""
      }


    </section>

  )
}
export default Product;