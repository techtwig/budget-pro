import React from 'react';
import { InputLabel, NativeSelect, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';

const About = () => {
    return (
        <Box mt={2} margin='10px'>
            <Paper sx={{ backgroundColor: '#D4F1F4', padding: '4px' }}>
                <Typography align='center' color={'#326cec'} variant='h5' component='h2'>About</Typography>
            </Paper>
        </Box>
    );
};

export default About;