import LazyLoad from 'react-lazyload'
import React from 'react';
export default function CategoryBanner(props){
    const {data} = props;
    return(<section className="single-banner-area content-seperator" key={props.index}>
    {data.imageUrl && (<div>
    <div className="col span-1-of-2">
      {props.index%2 != 0 ? (<div className="row login-left-area">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <button className="btn" aria-label={`Click on explore ${data.name} button to view products`} onClick={(event)=>props.navigateToPlp(event,data)}>{'Explore '+data.name}</button>
      </div>) : (<div className="row banner-right-area">
        <LazyLoad height={25} once>
          <img src={window.location.origin + data.imageUrl} alt={data.name} />
        </LazyLoad>
      </div>)}
    </div>
    <div className="col span-1-of-2">
    {props.index%2 != 0 ? (<div className="row banner-right-area">
        <LazyLoad height={25} once>
          <img src={window.location.origin + data.imageUrl} alt={data.name} />
        </LazyLoad>
      </div>) : (<div className="row login-left-area">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <button className="btn" aria-label={`Click on explore ${data.name} button to view products`} onClick={(event)=>props.navigateToPlp(event,data)}>{'Explore '+data.name}</button>
      </div>)}
    </div>
    </div>)}
  </section>)
}