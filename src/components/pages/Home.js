import React,{useState} from 'react';
import CategoryCard from '../molecules/CategoryCard';
const Home = ()=>{
    const [categories,setCategories] = useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:5000/categories").then(res=>res.json()).then(data=>{console.log(data)});
        let axios = require("axios");

        let config = {
          method: "get",
          url: "http://localhost:5000/categories",
          Headers: {}
        };
    
        axios(config)
          .then((res)=>{
            let filteredCategories = res.data.sort(function(a, b){
              return a.order - b.order;
            }).filter(a => a.enabled === true);
            setCategories(filteredCategories);
          })
          .catch((err)=>{
            console.log(err);
          });
    },[])
    return (<>
            <p>Home Page</p>
            <div className="categoryContainer">
            {categories.map(a=>{return <CategoryCard key={a.key} categoryName={a.name} imgUrl={a.imageUrl} desc={a.description}/>})}
            </div>
        </>)
}

export default Home;