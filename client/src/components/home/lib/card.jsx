import React from 'react'
import "../index.scss"

function Card({c,i}) {
    return (
        c.enabled&&<div style={{flexDirection:i%2==0?"row":"row-reverse"}} className="categoryCard">

                <div>
                    <img src={c.imageUrl} alt=""/>
                    </div>
                    <div className="info">
                        <h2>
                           {c.name}
                    
                            </h2>
                            <div>
                                {c.description}
                            </div>
                            <div style={{width:"max-content",padding:"10px 20px"}} className="btn">
                            Explore {c.key}
                            </div>

                        </div>
                        

        </div>
    )
}

export default Card
