import { Box } from '@mui/material';
import React from 'react';
import Expense from './Expense';
import Income from './Income';

const IncomeExpense = () => {
    return (
        <Box>
            <Income></Income>
            <Expense></Expense>
        </Box>
    );
};

export default IncomeExpense;