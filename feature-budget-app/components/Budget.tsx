import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import {Box, Button, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import BudgetModal from "./BudgetModal";
import BudgetList from "./BudgetList";
import axios from "axios";

interface IGetBudgetInfos {
        budget_item: string;
        budget_amount: number;
        _id: string;
}

const Budget = () => {
    const currentMonth = moment().format('MMMM');
    const [month, setMonth] = useState(currentMonth);
    const [budgetInfos, setBudgetInfos] = useState<Array<IGetBudgetInfos>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const[deleted,setDeleted]=useState<boolean>(false);



    const handleMonth=(e:any)=>{
        //console.log(e);
        setMonth(e.target.value);

    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteBudget = async (_id:string) => {
        await axios.delete(`http://localhost:5000/budget/${_id}`);
        setDeleted(()=>!deleted);


    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/budget/month/?month=${month}`)
            .then(res=>setBudgetInfos(res.data));
    },[month,open,deleted]);






    return (
        <Box>
            <Paper elevation={1} sx={{padding:'10px'}}>
                <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Budget</Typography>
                <InputLabel>
                    <Typography variant='body1'>Month</Typography>
                </InputLabel>
                <Select
                    fullWidth
                    defaultValue={currentMonth}
                    onChange={(e)=>handleMonth(e)}
                >
                    <MenuItem value={'January'}>January</MenuItem>
                    <MenuItem value={'February'}>February</MenuItem>
                    <MenuItem value={'March'}>March</MenuItem>
                    <MenuItem value={'April'}>April</MenuItem>
                    <MenuItem value={'May'}>May</MenuItem>
                    <MenuItem value={'June'}>June</MenuItem>
                    <MenuItem value={'July'}>July</MenuItem>
                    <MenuItem value={'August'}>August</MenuItem>
                    <MenuItem value={'September'}>September</MenuItem>
                    <MenuItem value={'October'}>October</MenuItem>
                    <MenuItem value={'November'}>November</MenuItem>
                    <MenuItem value={'December'}>December</MenuItem>
                </Select>
                {
                    budgetInfos.map(budgetInfo=><BudgetList
                        key={budgetInfo._id}
                        budgetInfo={budgetInfo}
                        deleteBudget={deleteBudget}
                        handleOpen={handleOpen}></BudgetList>)

                }
               <Typography mt={1} display='flex' alignItems='center' justifyContent='center'>
                   <Button
                       onClick={()=>handleOpen()}
                       variant="contained" size='small' color='success'  endIcon={<AddIcon/>}>
                       Add
                   </Button>
               </Typography>
                <BudgetModal open={open} handleClose={handleClose} budget_month={month}/>
            </Paper>
        </Box>
    );
};

export default Budget;