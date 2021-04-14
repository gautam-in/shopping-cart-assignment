import React from 'react'

export default function navigateButton({c,history}){
    return (
        <button
            onClick={() => history.push("products#" + c.id)}
            style={{ width: "max-content", padding: "10px 20px", margin:"20px"}}
            className="btn"
          >
            Explore {c.key}
          </button>
    )
}