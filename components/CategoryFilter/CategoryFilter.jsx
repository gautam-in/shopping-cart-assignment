/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  MenuItem,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/CategoryFilter.module.css';
import { addOrRemoveFilter } from '../../redux/features/productFilterSlice';

function CategoryFilter({ id, name }) {
  const [isLessThan700px] = useMediaQuery('(max-width: 700px)');
  const dispatch = useDispatch();
  const filterList = useSelector((state) => state.productFilter.appliedFilters);
  function clickHandler(categoryid) {
    dispatch(addOrRemoveFilter(categoryid));
  }

  // menubar for small screens
  if (isLessThan700px) {
    return (
      <MenuItem className={`${filterList?.includes(id) ? styles.active : ''}`} onClick={() => { clickHandler(id); }} width="100%">{name}</MenuItem>
    );
  }

  return (

    <div className={`${styles.CategoryFilterContainer} ${filterList?.includes(id) ? styles.active : ''}`} onClick={() => { clickHandler(id); }}>
      {name}
    </div>

  );
}

export default React.memo(CategoryFilter);
