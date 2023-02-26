import { MenuItem, Select, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import React from 'react';

const Dropdowns = () => {
    return (
        <div>
            <Box>
                <Grid /* bgcolor='#84acf4' */ padding={1}>
                    <Grid item xs={12} md={12}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Summary
                        </InputLabel>
                        <NativeSelect
                            fullWidth
                            defaultValue={'remaining'}
                            inputProps={{
                                name: 'remaining',
                            }}
                        >
                            <option value={'remaining'}>Remaining</option>
                            <option value={'budget'}>Budget</option>
                            <option value={'income'}>Income</option>
                            <option value={'expense'}>Expense</option>
                        </NativeSelect>
                    </Grid>
                </Grid>
                <Grid /* bgcolor='#84acf4' */ mt={1} padding={1}>
                    <Grid item xs={12} md={12}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Month
                        </InputLabel>
                        <NativeSelect
                            sx={{ width: '25%' }}
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
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Dropdowns;