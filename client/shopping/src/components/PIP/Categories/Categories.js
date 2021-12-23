import React, { useState } from 'react';

function Categories({categories}) {
    const [state, setState] = useState({toggle:false, current: categories[0].name})
    let dropDown = ()=>{
        setState({...state, toggle:!state.toggle})
    }
    let setCategory = (data)=>{
        setState({toggle:!state.toggle, current:data})
    }
    return (
        <>
        <div className="row">
            <div className="col-12 categoriesTab mobiledropdown" style={{order:0}} onClick={dropDown}>
                <div style={{display:'flex', justifyContent:"space-between"}}><div>{state.current}</div> <div>V</div></div>
            </div>
            <div className={state.toggle?"open":"close"}>
                {Object.keys(categories).map((key)=>{
                    return categories[key].order>=0 && <div className="col-11 categoriesTab" style={{order:categories[key].order}} onClick={()=>setCategory(categories[key].name)}>
                        {categories[key].name}
                    </div>
                })} 
            </div>
        </div>
        </>
    );
}

export default Categories;