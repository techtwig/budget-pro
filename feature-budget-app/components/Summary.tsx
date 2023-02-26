import { Box, Grid } from '@mui/material';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import React from 'react';

const Summary = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} mb={2}>
                        <Typography variant='h6' component='h1'>Summary</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box>
                                <NativeSelect
                                    sx={{ marginRight: '5px' }}
                                    defaultValue={'remaining'}
                                >
                                    <option value={'income'}>Income</option>
                                    <option value={'expense'}>Expense</option>
                                    <option value={'remaining'}>Remaining</option>
                                    <option value={'budget'}>Budget</option>
                                </NativeSelect>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{ marginRight: '5px',marginLeft:'5px' }}>Month:</Typography>
                                <NativeSelect
                                    defaultValue={'january'}
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
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} mb={2}>
                        <Typography variant='h6' component='h1'>Summary pie chart will be added here.</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' component='h1'>Item Bar Chart will be added here.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Summary;