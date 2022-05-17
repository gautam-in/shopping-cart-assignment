import axios from 'axios';
import { useEffect, useState } from 'react';
import Category from '../Category/Category.component';

const Categories = (props) => {
    const [cat,setCat] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
            .then(res => setCat(res.data))
    },[]);

    return (
        <div>
            {
                cat && cat.map(cat => (
                    <Category key={cat.key} data={cat}/>
                ))
            }

        </div>
    );
}

export default Categories;