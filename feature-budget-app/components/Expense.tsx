import React from 'react';
import {Box, Button, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment/moment";
import AddIcon from "@mui/icons-material/Add";

const Expense = () => {
    const currentMonth = moment().format('MMMM').toLowerCase();
    return (
        <Box>
            <Paper elevation={1} sx={{padding:'10px'}}>
                <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Expense</Typography>
                <InputLabel>
                    <Typography variant='body1'>Month</Typography>
                </InputLabel>
                <Select
                    fullWidth
                    defaultValue={currentMonth}
                >
                    <MenuItem value={'january'}>January</MenuItem>
                    <MenuItem value={'february'}>February</MenuItem>
                    <MenuItem value={'march'}>March</MenuItem>
                    <MenuItem value={'april'}>April</MenuItem>
                    <MenuItem value={'may'}>May</MenuItem>
                    <MenuItem value={'june'}>June</MenuItem>
                    <MenuItem value={'july'}>July</MenuItem>
                    <MenuItem value={'august'}>August</MenuItem>
                    <MenuItem value={'september'}>September</MenuItem>
                    <MenuItem value={'october'}>October</MenuItem>
                    <MenuItem value={'november'}>November</MenuItem>
                    <MenuItem value={'december'}>December</MenuItem>
                </Select>
                <Typography mt={1} display='flex' alignItems='center' justifyContent='center'>
                    <Button
                        variant="contained" size='small' color='success' endIcon={<AddIcon/>}>
                        Add
                    </Button>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Expense;