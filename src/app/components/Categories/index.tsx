/**
 *
 * Categories
 *
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Skeleton from '@mui/material/Skeleton';
import map from 'lodash/map';
import { CategoryItem } from 'types/banners';
import { CategoryStyle } from 'styles/category-styles';

interface Props {
  items: Array<CategoryItem>;
  loading: boolean;
}

export const Categories = memo((props: Props) => {
  const { items, loading } = props;

  if (loading) {
    return <Skeleton variant="rectangular" height={318} />;
  }

  return (
    <div>
      <CategoryStyle />
      {map(items, ({ imageUrl, id, name, description }) => (
        <Div className="category" key={id}>
          <div className="category-img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="category-info">
            <div className="category-title">{name}</div>
            <div className="category-desc">{description}</div>
            <Link className="category-btn" to={`/products/${id}`}>
              {name}
            </Link>
          </div>
        </Div>
      ))}
    </div>
  );
});

const Div = styled.div`
  margin-top: 5px;
  padding-bottom: 5px;
`;
