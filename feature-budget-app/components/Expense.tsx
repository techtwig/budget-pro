import { InputLabel, NativeSelect, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React from 'react';

const Expense = () => {
    return (
        <Box mt={2}>
            <Paper sx={{ backgroundColor: '#D4F1F4', padding: '4px',margin:'10px' }}>
                <Typography align='center' color={'#326cec'} variant='h5' component='h2'>Expense</Typography>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    <Typography variant='body1' component='p' fontWeight={550} color={'#657cb3'}>Month</Typography>
                </InputLabel>
                <NativeSelect
                    // sx={{ width: '50%' }}
                    defaultValue={'january'}
                    inputProps={{
                        name: 'remaining',
                    }}
                >
                    <option value={'january'}>January</option>
                    <option value={'february'}>February</option>
                    <option value={'march'}>March</option>
                    <option value={'april'}>April</option>
                    <option value={'may'}>May</option>
                    <option value={'june'}>June</option>
                    <option value={'july'}>July</option>
                    <option value={'august'}>August</option>
                    <option value={'september'}>September</option>
                    <option value={'october'}>October</option>
                    <option value={'november'}>November</option>
                    <option value={'december'}>December</option>
                </NativeSelect>
            </Paper>

        </Box>
    );
};

export default Expense;