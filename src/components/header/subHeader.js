import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchCategories } from '../../api/catergories'
import MyContext from '../../context/myContext';

export default function SubHeader() {

    const [list, setList] = useState([]);
    const { setCategories } = useContext(MyContext);
    const { id: categoryId } = useParams();

    useEffect(() => {
        fetchCategories()
            .then(res => {
                setList(res.data);
                setCategories(res.data)
            })
            .catch(error => {

            })
    }, []);

    if (list.length > 0) {
        return (
            <nav className="CategoryContainer">
                <ul>
                    {
                        list.map(item => (
                            <li
                                key={item.id}
                                className={`${item.id === categoryId && "SelectedTab"}`}
                            ><Link to={`/categories/${item.id}`}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
    return null;
}
