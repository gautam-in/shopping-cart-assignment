import React ,{useEffect}from 'react'
import axios from 'axios'
import "./App.css"
export default function App() {
    const options={
        mode: "cors",
        cache: "default",
        method: "GET",
        credentials: "same-origin",
      };
    useEffect(()=>{
        //axios.get('http://localhost:5000/server/addToCart/index.post.json')
        fetch('http://localhost:5000/addToCart/index.post.json',options)
    },[])
    return (
        <div className="test">
            webpack setup
        </div>
    )
}
