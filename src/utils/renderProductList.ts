import get from 'lodash/get';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

const renderProducts = (data, id) => {
  if (!isEmpty(id)) {
    const filterProducts = filter(data, ({ category }) =>
      isEqual(category, id),
    );
    return filterProducts;
  }
  return data;
};

export default renderProducts;
