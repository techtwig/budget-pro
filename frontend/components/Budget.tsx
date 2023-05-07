import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import {Box, Button, Card, CardContent, Grid, IconButton, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BudgetAddEditModal from "./BudgetAddEditModal";
import axiosInstance from "@/axiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

interface IGetBudgetInfos {
        budget_item: string;
        budget_amount: number;
        _id: string;
}

const Budget = () => {
    const currentMonth = moment().format('MMMM');
    const [month, setMonth] = useState<string>(currentMonth);
    const [budgetInfos, setBudgetInfos] = useState<Array<IGetBudgetInfos>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const[deleted,setDeleted]=useState<boolean>(false);
    const[editId, setEditId]=useState<string | null>(null);

    const router = useRouter();

    const handleMonth=(e:any)=>{
        //console.log(e);
        setMonth(e.target.value);
    }
    const handleOpen = () => {
        setOpen(true);
        setEditId(null);
    }
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        axiosInstance.get(`http://localhost:5000/budget/month/?month=${month}`)
            .then(res=>setBudgetInfos(res.data));
    },[month,open,deleted]);

    const deleteBudget = async (_id:string) => {
        try {
            await axiosInstance.delete(`http://localhost:5000/budget/${_id}`);
            setDeleted(() => !deleted);
        }catch (e) {
            toast.error('You are not logged in. Please login.');
            setTimeout(() => {
                router.push('/login');
            }, 5000);
        }
    }

    const editBudget = (id: string | null) => {
        setOpen(true);
        setEditId(id);
    };


    return (
        <Box>
                <Paper elevation={1} sx={{padding:'10px', backgroundColor: '#f5f5f5'}}>
                    <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Budget</Typography>
                    <InputLabel>
                        <Typography variant='body1'>Month</Typography>
                    </InputLabel>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
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
                    <Typography  ml={1} display='flex' alignItems='center' justifyContent='center'>
                        <Button
                            sx={{fontSize: '1.5rem'}}
                            onClick={()=>handleOpen()}
                            variant="contained" size='small' color='success'  endIcon={<AddIcon/>}>
                            Add
                        </Button>
                    </Typography>
                    </Box>
                </Paper>
            <Box>
                {
                    budgetInfos.map(budgetInfo =>
                        <Card key={budgetInfo._id} sx={{bgcolor: '#00CEAC', marginTop: '5px'}}>
                            <CardContent
                                sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                                <Typography sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px'}}>
                                    Item: {budgetInfo?.budget_item}
                                </Typography>
                                <Typography sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px',marginLeft: '20px'}}>
                                    Amount: {budgetInfo?.budget_amount}
                                </Typography>
                                <Box sx={{marginLeft: '20px'}}>
                                <IconButton
                                    onClick={() => editBudget(budgetInfo._id)}
                                    aria-label="edit"
                                    size="medium"
                                    sx={{color: '#FFFFFF'}}>
                                    <EditIcon fontSize="inherit"/>
                                </IconButton>
                                <IconButton
                                    onClick={() => deleteBudget(budgetInfo._id)}
                                    aria-label="delete"
                                    size="large"
                                    sx={{color: '#FFFFFF'}}>
                                    <DeleteIcon fontSize="medium"/>
                                </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    )
                }
                <BudgetAddEditModal id={editId}
                                    open={open}
                                    handleClose={handleClose}
                                    budget_month={month}></BudgetAddEditModal>
            </Box>
            <ToastContainer position="top-center"
                            theme="colored"/>
        </Box>

    );
};

export default Budget;