import React ,{useEffect}from 'react'
import axios from 'axios'
import "./App.css"
export default function App() {
    useEffect(()=>{
        //axios.get('http://localhost:5000/server/addToCart/index.post.json')
        axios.get('http://localhost:5000/addToCart/index.post.json')
    },[])
    return (
        <div className="test">
            webpack setup
        </div>
    )
}
