import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Charts = () => {
    return (
        <Box margin='10px'>
            <Box sx={{ backgroundColor: '#D4F1F4', padding: '4px' }}>
                <Typography>Summary pie chart.</Typography>
            </Box>
            <Box mt={2} sx={{ backgroundColor: '#D4F1F4', padding: '4px' }}>
                <Typography>Items bar chart.</Typography>
            </Box>
        </Box >
    );
};

export default Charts;