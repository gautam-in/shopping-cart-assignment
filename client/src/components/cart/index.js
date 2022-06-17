import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import theme from '../../theme';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));

export default function Cart() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge fontSize='medium' badgeContent={1} color="secondary" >
        <ShoppingCartIcon fontSize='large' color="primary" />
      </StyledBadge>
    </IconButton>
  );
}


