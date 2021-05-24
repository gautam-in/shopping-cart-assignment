import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as actions from "../../store/actions/index"
import "./Backdrop.scss"
export default function Backdrop(props) {
     const dispatch = useDispatch()
    const show = useSelector(state => state.showCart)
    return (
        show ? <div className="backdrop" onClick={()=>dispatch(actions.showCart(!show))}> </div>: null
    )
    }
