import {Box, Grid, Typography} from '@mui/material';
import { Container } from '@mui/system';
import React, {useState} from 'react';
import Budget from './Budget';
import Charts from './Charts';
import Dropdowns from './Dropdowns';
import IncomeExpense from './IncomeExpense';
import Income from "./Income";
import Expense from "./Expense";
import Summary from "./Summary";


const MainBody = () => {
    const [options,setOptions]=useState('summary');
    const handleOptions=(e:any)=>{
        //console.log(e);
        setOptions(e.target.value);
    }
    return (
        <Container>
            <Container sx={{ backgroundColor: 'white', paddingBottom: '10px'}}>
                <Dropdowns handleOptions={handleOptions}></Dropdowns>
                <Grid container mt={2}>
                    <Grid item xs={12} md={12}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            {options==='summary'&&<Summary/>}
                            {options==='budget'&&<Budget/>}
                            {options==='income'&&<Income/>}
                            {options==='expense'&&<Expense/>}

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};
export default MainBody;