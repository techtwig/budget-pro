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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


interface IgetIncomeInfos {
    income_source: string;
    income_amount: number;
    _id: string;
}
interface IgetExpenseInfos {
    expenseItem: string;
    expenseAmount: number;
    _id: string;
}

interface CashbookInfos{
    createdAt:string,
    updatedAt:string
    expenseId?:IgetExpenseInfos,
    incomeId?:IgetIncomeInfos,
    currentBalance:number,
    _id:string
}


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
const Cashbook = () => {
    const currentMonth = moment().format('MMMM');
    const [month, setMonth] = useState(currentMonth);
    const [cashbooks, setCashbook] = useState<Array<CashbookInfos>>([]);
    const [open, setOpen] = useState<boolean>(false);
    const[deleted,setDeleted]=useState<boolean>(false);
    const [editId, setEditId] = useState<string | null>(null);

    const router = useRouter();

    const handleMonth=(e:any)=>{
        //console.log(e);
        setMonth(e.target.value);

    }

    useEffect(()=>{
        axiosInstance.get(`http://localhost:5000/cashbook`)
            .then(res=>setCashbook(res.data));
    },[month,open,deleted]);
    console.log(cashbooks);



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
                <Paper elevation={1} sx={{padding: '10px', backgroundColor: '#f5f5f5'}}>
                    <Typography align='center' variant='h5' color='#388E3C' fontWeight={550}>Cashbook</Typography>
               
                </Paper>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">CreatedAt</TableCell>
            <TableCell align="center">Current Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cashbooks.length && cashbooks.map((cashbook) => (
            <TableRow
              key={cashbook._id}
               sx={{
    '&:last-child td, &:last-child th': { border: 0 },
    bgcolor: cashbook?.expenseId?.expenseItem ? '#b34141' : '#51a351',
  }}
            >
              <TableCell component="th" scope="row"  sx={{color:'white'}}>
                {cashbook?.expenseId?.expenseItem ||cashbook?.incomeId?.income_source }
              </TableCell>
              <TableCell align="center" sx={{color:'white'}}> {cashbook?.expenseId?.expenseAmount ||cashbook?.incomeId?.income_amount }</TableCell>
              <TableCell align="center" sx={{color:'white'}}> {cashbook?.expenseId?.expenseItem ?'Expense':"Income" }</TableCell>
              <TableCell align="center" sx={{color:'white'}}> {moment(cashbook?.createdAt).format('YYYY-MM-DD')}</TableCell>
              <TableCell align="center" sx={{color:'white'}}> {cashbook?.currentBalance }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                <ToastContainer position="top-center"
                                theme="colored"/>

            </Box>
        );
};

export default Cashbook;