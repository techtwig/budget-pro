import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, IconButton, MenuItem, Paper, Select, Typography} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment/moment";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IncomeAddEditModal from "./IncomeAddEditModal";
import axiosInstance from "@/axiosInstance";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

interface IgetIncomeInfos {
    income_source: string;
    income_amount: number;
    _id: string;
}

const Income = () => {
    const currentMonth = moment().format('MMMM');
    const [month, setMonth] = useState(currentMonth);
    const [incomeInfos, setIncomeInfos] = useState<Array<IgetIncomeInfos>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const[deleted,setDeleted]=useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);

    const router = useRouter();

    const handleMonth=(e:any)=>{
        //console.log(e);
        setMonth(e.target.value);

    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/income/month/?month=${month}`)
            .then(res=>setIncomeInfos(res.data));
    },[month,open,deleted]);
    console.log(incomeInfos);

    const deleteIncome = async (_id:string) => {
        try {
            await axiosInstance.delete(`http://localhost:5000/income/${_id}`);
            setDeleted(() => !deleted);
        }catch (e) {
            toast.error('You are not logged in. Please login.');
            setTimeout(() => {
                router.push('/login');
            }, 5000);
        }
    }


    const editIncome = (id: string | null) => {
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
                <Paper elevation={1} sx={{padding: '10px'}}>
                    <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Income</Typography>
                    <InputLabel>
                        <Typography variant='body1'>Month</Typography>
                    </InputLabel>
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
                    <Typography mt={1} display='flex' alignItems='center' justifyContent='center'>
                        <Button
                            onClick={() => handleOpen()}
                            variant="contained" size='small' color='success' endIcon={<AddIcon/>}>
                            Add
                        </Button>
                    </Typography>
                </Paper>
                <Box>
                    {
                        incomeInfos.map(incomeInfo =>
                            <Card key={incomeInfo._id} sx={{bgcolor: '#00CEAC', marginTop: '5px'}}>
                                <CardContent
                                    sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

                                    <Typography variant="h6" component="h6" mr={1} color='#212121'>
                                        {incomeInfo?.income_source}
                                    </Typography>
                                    <Typography variant="h6" component="h6" mr={1} color='#212121'>
                                        {incomeInfo?.income_amount}
                                    </Typography>

                                    <IconButton
                                        onClick={() => editIncome(incomeInfo._id)}
                                        aria-label="edit"
                                        size="medium"
                                        sx={{color: '#FFFFFF'}}>
                                        <EditIcon fontSize="inherit"/>
                                    </IconButton>
                                    <IconButton
                                        onClick={() => deleteIncome(incomeInfo._id)}
                                        aria-label="delete"
                                        size="large"
                                        sx={{color: '#FFFFFF'}}>
                                        <DeleteIcon fontSize="medium"/>
                                    </IconButton>
                                </CardContent>
                            </Card>

                        )
                    }
                    <IncomeAddEditModal id={editId}
                                        open={open}
                                        handleClose={handleClose}
                                        income_month={month}></IncomeAddEditModal>
                </Box>
                <ToastContainer position="top-center"
                                theme="colored"/>

            </Box>
        );
};

export default Income;