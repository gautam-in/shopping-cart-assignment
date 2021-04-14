import React from 'react';

export default function categoryImage({c}){
    return (
        <div>
          <img data-test = "card-imgUrl"src={c.imageUrl} alt="" />
        </div>
    )
}