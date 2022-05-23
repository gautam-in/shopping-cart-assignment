import { useState, useEffect } from "react"
import { useSearchParams } from 'react-router-dom'
import axios from "axios"
import './Sidebar.css'

const MobileSidebar = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const [Categorydata, setCategoryData] = useState(null)

    useEffect(()=>{
        const data = async () => {
           const data = await axios.get('http://localhost:5000/categories').then(response => {
               return response.data
           })
           
           setCategoryData(data)
        }
        data()
    },[])

    return (
    <div className="col-sm-12 col-lg-3">
        <div className="sidebar">

            <select name="" className="form-control" onChange={(e) => { setSearchParam({ category: e.target.value }) }} id="">
                 { Categorydata && Categorydata.map((category, index) => <option value={category.id} key={category.key}>{category.name}</option> )}
            </select>
         
        </div>
    </div>
    );
}

export default MobileSidebar