import { Paper, Typography } from '@material-ui/core';
import React from 'react'

const Footer = () => {
    return <Paper style={{ backgroundColor: '#e7e7ec' }}>
        <Typography
            style={{ marginLeft: '16%' }}
            variant="h6">
            Copyright (c) 2020-2021 Sabka Bazaar Grocery Supplies Pvt Ltd
            </Typography>
    </Paper>
}

export default Footer;