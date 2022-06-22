import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme from '../../theme';
import {useSelector} from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `0.125rem solid ${theme.palette.background.paper}`,
    padding: '0 0.25rem',
    
  },
}));

export default function Cart() {


  const {cartItems} = useSelector((state)=> state.product)

  
  return (
    <IconButton aria-label="cart">
      <StyledBadge fontSize='medium' badgeContent={cartItems} color="secondary" >
        <ShoppingCartIcon fontSize='medium' color="primary" />
      </StyledBadge>
    </IconButton>
  );
}


