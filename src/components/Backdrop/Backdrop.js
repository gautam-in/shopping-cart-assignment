import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from "../../store/actions/index"
import "./Backdrop.scss"
export default function Backdrop(props) {
    const dispatch = useDispatch()
    const show = useSelector(state => state.showCart)
    let showBackdrop=[]
        if (show)
         showBackdrop= <div className="backdrop" onClick={() => dispatch(actions.showCart(!show))}> </div>
        else showBackdrop=null
    

    return (
         showBackdrop
    )
}
