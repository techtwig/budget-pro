import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Grid, IconButton, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment/moment";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpenseAddEditModal from "./ExpenseAddEditModal";
import axiosInstance from "@/axiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

interface IgetExpenseInfos {
    expenseItem: string;
    expenseAmount: number;
    _id: string;
}

const Expense = () => {
    const currentMonth = moment().format('MMMM');
    const [month, setMonth] = useState(currentMonth);
    const [expenseInfos, setExpenseInfos] = useState<Array<IgetExpenseInfos>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const[deleted,setDeleted]=useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);
    console.log(month);

    const router = useRouter();

    // const handleMonth=(e:any)=>{
    //     //console.log(e);
    //     setselectedMonth(e.target.value);
    //
    // }

    const handleMonth=(e:any)=>{
        //console.log(e);
        setMonth(e.target.value);

    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/expense/month/?month=${month}`)
            .then(res=>setExpenseInfos(res.data));
    },[month,open,deleted]);
    console.log(expenseInfos);

    const deleteExpense = async (_id:string) => {
        try {
            await axiosInstance.delete(`http://localhost:5000/expense/${_id}`);
            setDeleted(() => !deleted);
        }catch (e) {
            toast.error('You are not logged in. Please login.');
            setTimeout(() => {
                router.push('/login');
            }, 5000);
        }

    }
    const editExpense = (id: string | null) => {
        setOpen(true);
        setEditId(id);
    };
    const handleOpen = () => {
        setOpen(true);
        setEditId(null);
        }
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Paper elevation={1} sx={{padding:'10px', backgroundColor: '#f5f5f5'}}>
                <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Expense</Typography>
                <InputLabel>
                    <Typography variant='body1'>Month</Typography>
                </InputLabel>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Select
                    fullWidth
                    defaultValue={currentMonth}
                    onChange={(e) => handleMonth(e)}
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
                <Typography ml={1} display='flex' alignItems='center' justifyContent='center'>
                    <Button
                        sx={{fontSize: '1.5rem'}}
                        onClick={() => handleOpen()}
                        variant="contained" size='small' color='success' endIcon={<AddIcon/>}>
                        Add
                    </Button>
                </Typography>
                </Box>
            </Paper>
            <Box>
                {
                    expenseInfos.map(expenseInfo =>
                        <Card key={expenseInfo._id} sx={{bgcolor: '#00CEAC', marginTop: '5px'}}>
                            <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                                    <Typography sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px'}}>
                                        Item: {expenseInfo?.expenseItem}
                                    </Typography>
                                    <Typography sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px',marginLeft: '20px'}}>
                                        Amount: {expenseInfo?.expenseAmount}
                                    </Typography>
                                <Box sx={{marginLeft: '20px'}}>
                                    <IconButton
                                        onClick={() => editExpense(expenseInfo._id)}
                                        aria-label="edit"
                                        size="medium"
                                        sx={{color: '#FFFFFF'}}>
                                        <EditIcon fontSize="inherit"/>
                                    </IconButton>
                                    <IconButton
                                        onClick={() => deleteExpense(expenseInfo._id)}
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
                <ExpenseAddEditModal id={editId}
                                     open={open}
                                     handleClose={handleClose}
                                     expenseMonth={month}></ExpenseAddEditModal>
            </Box>
            <ToastContainer position="top-center"
                            theme="colored"/>
        </Box>
    );
};

export default Expense;