import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { components } from 'react-select';
import { setCurrentCategory } from '../../store/categories/categories.actions';
import { selectCategories } from '../../store/categories/categories.selector';

import { CustomSelectContainer } from './custom-select.styles';

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);

const CustomControl = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CategoryOptions = categories.map((category) => {
    return { ...category, value: category.key, label: category.name };
  });

  const handleSelectChange = ({ id: categoryId }) => {
    dispatch(setCurrentCategory(categoryId));
    navigate(`/products/${categoryId}`);
  };
  return (
    <CustomSelectContainer
      defaultValue={CategoryOptions[0]}
      styles={{
        singleValue: (base) => ({ ...base, color: 'white' }),
        valueContainer: (base) => ({
          ...base,
          background: '#be2857',
          color: 'white',
          width: '100%',
        }),
        container: (base) => ({
          ...base,
          backgroundColor: '#be2857',
          padding: 5,
        }),
      }}
      components={{ ValueContainer }}
      name="color"
      options={CategoryOptions}
      isSearchable={false}
      onChange={handleSelectChange}
      placeholder="Select Category"
    />
  );
};

export default CustomControl;
