import React from "react"

const NoPageFound=()=>{
    const handleGoBack=()=>{
        console.log('inside handle go back')

    }
    return(<>
    <section>'No Page Found</section>
    <button onClick={handleGoBack}>GoBack</button>
    
    </>)
}

export default NoPageFound