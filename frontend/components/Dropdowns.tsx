import { MenuItem, Select, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';



const Dropdowns = ({handleOptions}:any) => {

    return (
        <div>
            <Box>
                <Grid container padding={1}>
                    <Grid item xs={12} md={12}>
                        <InputLabel>
                           <Typography variant='body1'>Options</Typography>
                        </InputLabel>
                        <Select
                            fullWidth
                            defaultValue={'summary'}
                            onChange={(e)=>handleOptions(e)}
                        >
                            <MenuItem value={'summary'}>Summary</MenuItem>
                            <MenuItem value={'budget'}>Budget</MenuItem>
                            <MenuItem value={'income'}>Income</MenuItem>
                            <MenuItem value={'expense'}>Expense</MenuItem>
                            <MenuItem value={'cashbook'}>Cashbook</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Dropdowns;