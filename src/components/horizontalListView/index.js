import React from 'react'

export default function HorizontalListView({
    title = "Featured Product",
    children
}) {

    const navRef = React.useRef(null);

    const handleNav = (direction) => {
        if (navRef && navRef.current) {
            if (direction === 'left') {
                navRef.current.scrollLeft -= 200;
            } else {
                navRef.current.scrollLeft += 200
            }
        }

    }


    return (
        <section>
            <div className="container">
                <h1 style={{ 'text-align': 'center' }}>
                    {title}
                </h1>
                <div className="CardContainer">
                    <div className="CardContainer_ArrowContainer">
                        <button onClick={() => handleNav('left')}><i className="fa fa-lg fa-chevron-left"></i></button>
                    </div>

                    <div className="CardContainer__List" ref={navRef}>
                        {children}
                    </div>
                    <div className="CardContainer_ArrowContainer">
                        <button onClick={() => handleNav('right')}><i className="fa fa-lg fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
}