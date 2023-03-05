import React from 'react';
import {Box, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

const Summary = () => {
    return (
        <Box>
            <Paper elevation={1} sx={{padding:'10px'}}>
                <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Summary</Typography>
            </Paper>
        </Box>
    );
};

export default Summary;