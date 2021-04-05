import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
import ProductItem from '../Products/ProductItem';

const AccordionSection = styled.div`
  margin: 15px 0px;
`;

const Wrap = styled.div`
  background: #ce0e55;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  h1{
    letter-spacing: 0.5px;
    font-size:18px;
    padding-left:2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Accordion = ({ categories, products }) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(0);
    }, [])

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: '#FFFFFF', size: '25px' }}>
            <AccordionSection>
                {categories.map((item, index) => {
                    return (
                        <Fragment key={item.id}>
                            <Wrap onClick={() => toggle(index)} key={item.id}>
                                <h1>{item.name}</h1>
                                <span>{clicked === index ? <BsChevronDown /> : <BsChevronRight />}</span>
                            </Wrap>
                            {clicked === index ? (
                                products.filter(elem => elem.category === item.id).map(product => {
                                    return (
                                        <ProductItem key={product.id} product={product} />
                                    )
                                })
                            ) : null}
                        </Fragment>
                    );
                })}
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;