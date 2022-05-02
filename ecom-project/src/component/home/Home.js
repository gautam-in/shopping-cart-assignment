import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { allCategoryData, getAllproduct } from "../../redux/action";
import './home.css'

const Home = () => {
  const dispatch = useDispatch()
  const categoryData = useSelector(state => state.categoryList.category)

  let navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/product/${data}`)
  }
  const [data, setData] = useState([])
  useEffect(() => {
    dispatch(allCategoryData())
    dispatch(getAllproduct())
  }, [])
  useEffect(() => {
    let list = categoryData;
    setData(list)
  }, [data])

  return (<>
    <section className="home-main">
      {
        data.length > 0 ? data.map((e, i) => {
          return (
            i % 2 == 0 ? <div className="home-row" key={e.id}>
              <div className="home-col1">
                <div>
                  <img src={e.imageUrl} className="image-res" />
                </div>
              </div>
              <div className="home-col2">
                <div>
                  <h2>{e.name}</h2>
                  <p>{e.description}</p>
                  <button className="button" onClick={() => handleClick(e.id)}>Explore {e.key}</button>
                </div>
              </div>

            </div> :
              <div className="home-row" key={e.id}>

                <div className="home-col2">
                  <div>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <button className="button" onClick={() => handleClick(e.id)}>Explore {e.key}</button>
                  </div>
                </div>
                <div className="home-col1">
                  <div>
                    <img src={e.imageUrl} className="image-res" />
                  </div>
                </div>

              </div>
          )
        }) : ""
      }


    </section>
  </>
  )
}

export default Home;

