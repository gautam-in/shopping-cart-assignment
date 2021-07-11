import styled from 'styled-components';
import React from 'react';

const SideNavStyles = styled.aside`
  background-color: #d3d3d3;
  overflow-x: hidden;
  position: fixed;
  width: 100%;
  button {
    padding: 10px 20px;
    text-decoration: none;
    font-size: 12px;
    text-align: left;
    display: block;
  }
  .Categories {
    display: none;
    button {
      background: none;
    }
  }
  .DownArrow {
    position: absolute;
    right: 2rem;
    top: 0.5rem;
    font-size: 1.6rem;
    transform: rotate(90deg);
  }

  @media only screen and (min-width: 600px) {
    width: 25%;
    height: 100%;
    .DropButton {
      display: none;
    }
    .Categories {
      display: grid;
      background-color: #d3d3d3;
      button {
        border-bottom: 0.1rem solid;
        margin-left: 1rem;
        padding: 1rem;
        text-decoration: none;
        font-size: 1rem;
        text-align: left;
        display: block;
        color: #5c5555;
        background: none;
      }
      .selected {
        background: #909090;
        font-weight: 600;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    width: 16%;
  }
`;

export default function SideNav({
  itemNum,
  handleSelect,
  categoryData,
  selectedFilterVal,
}) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedFilter, setSelectedFilter] = React.useState(
    selectedFilterVal ?? ''
  );

  const handleDropdown = () => {
    setIsOpen(!isOpen);
    let el = document.querySelector('.Categories');
    window.innerWidth < 600 && !isOpen
      ? (el.style.display = 'none')
      : (el.style.display = 'grid');
  };

  return (
    <SideNavStyles itemNum={itemNum}>
      <button className='DropButton' onClick={handleDropdown}>
        {selectedFilter !== '' ? selectedFilter : 'Select a category'}
        <span className='DownArrow'>{'>'}</span>
      </button>
      <div className='Categories'>
        {categoryData.map((item) => (
          <button
            onClick={(e) => {
              setSelectedFilter(e.target?.innerText);
              handleDropdown();
              handleSelect(e);
            }}
            key={item.id}
            className={
              selectedFilter === item.name ? 'selected' : 'not-selected'
            }>
            {item.name}
          </button>
        ))}
      </div>
    </SideNavStyles>
  );
}
