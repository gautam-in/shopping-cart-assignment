import Container from '@mui/material/Container';
import { styled as mStyled} from '@mui/material/styles';

export const CustomContainer = mStyled(Container)({
  // your custom styles go here

}) as typeof Container;