import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

import {
  Image,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category, reverse }) => {
  const { imageUrl, name, description, key } = category;
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/products/${key}`);
  }

  return (
    <DirectoryItemContainer>
      <Image src={imageUrl} alt={name} order={reverse ? 2 : 1} />
      <Body order={reverse ? 1 : 2}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button onClick={clickHandler} children={`Explore ${key}`} />
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
