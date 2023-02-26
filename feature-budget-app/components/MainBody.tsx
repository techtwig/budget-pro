import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import About from './About';
import Budget from './Budget';
import Charts from './Charts';
import Dropdowns from './Dropdowns';
import IncomeExpense from './IncomeExpense';

const MainBody = () => {
    return (
        <Container>
            <Container sx={{ backgroundColor: 'white', paddingBottom: '10px'}}>
                <Dropdowns></Dropdowns>
                <Grid container mt={2}>
                    <Grid item xs={12} md={6}>
                        <Charts></Charts>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <IncomeExpense></IncomeExpense>
                    </Grid>
                </Grid>
                <Grid container mt={2}>
                    <Grid item xs={12} md={6}>
                        <Budget></Budget>
                    </Grid>
                    {/*<Grid item xs={12} md={6}>*/}
                    {/*    <About></About>*/}
                    {/*</Grid>*/}
                </Grid>

            </Container>
        </Container>
    );
};

export default MainBody;