import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories, updatedSelectedCategory } from "../../features/category/CategorySlice"
import "../../styles/components/leftnav.scss"
import Select from "react-select"
import {Link} from "react-router-dom"



const LeftNav = () => {
    const { data } = useSelector(state => state.CategoryReducer)
    const [selectOption, setSelectOption] = React.useState("Select Category")
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchCategories())

    }, [])


    const handleProductClicked = (categoryId) => {
        const payload = {
            id: categoryId,

        }
        dispatch(updatedSelectedCategory(payload))
    }

    const handleChange = (e) => {

        setSelectOption(e.label)
        const payload = {
            id: e.value,

        }
        dispatch(updatedSelectedCategory(payload))
    }

    const getOptions = (optionsData) => {

        return optionsData.map(item => {
            return {
                label: item.name,
                value: item.id
            }
        })



    }


    return (
        <>
            <main className={"leftnav_container"}>

                {data && data.map((cat, index) => {
                    return (<div className="nav_item" key={index} tabIndex="0">
                        <Link className="nav-link" onClick={() => handleProductClicked(cat.id)}>{cat.name}</Link>
                    </div>)
                })}



            </main>

            {data && <div className="dropdown">
                <Select
                    options={getOptions(data)}
                    onChange={handleChange}
                    value={{ label: selectOption }}
                    placeholder="Select category"
                />
            </div>}

        </>

    )

}

export default LeftNav

