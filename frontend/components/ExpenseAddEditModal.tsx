import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Modal, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import axios from 'axios';
import axiosInstance from "@/axiosInstance";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border:'4px solid limegreen',
    borderRadius:'2px',
    p: 4,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
};

interface IExpenseModal{
    id: string | null;
    open:boolean;
    handleClose:()=>void;
    expenseMonth:String;


}

const ExpenseAddEditModal = ({id, open, handleClose, expenseMonth}:IExpenseModal) => {

    const router = useRouter();

    //console.log(getIndividualBudget);

    const schema = yup.object().shape({
        expenseItem: yup.string().required('Please write your income source')
            .min(7, 'Write at least 7 characters')
            .max(20, 'Complete in 20 characters'),
        expenseAmount: yup.number().required('Amount is required')
            .positive('Amount must be positive')
            .integer('Amount must be positive integer')
    });

    const {register,control, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)});

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        if(id!==null) {
            axios.get(`http://localhost:5000/expense/${id}`)
                .then(res => setFormData(res.data))
        }
    }, [id])
    console.log(formData);

    useEffect(() => {
        if (id) {
            reset({
                expenseItem: formData.expenseItem,
                expenseAmount: formData.expenseAmount
            })
        }
        else{
            reset({
                expenseItem: '',
                expenseAmount: ''
            })
        }
    }, [id, reset, formData])
    const onSubmitHandler = async (expenseInfo: any) => {
        //console.log({budgetInfo});
        //console.log(month);
        const totalExpenseInfo = {...expenseInfo,expenseMonth};
        console.log(totalExpenseInfo);
        try{
            if(!id){
                await axiosInstance({
                    method: 'post',
                    url: 'http://localhost:5000/expense',
                    data: totalExpenseInfo
                });
            }else {
                await axiosInstance.put(`http://localhost:5000/expense/${id}`, totalExpenseInfo)
            }
        }
        catch (e) {
            toast.error('You are not logged in. Please login.');
            setTimeout(() => {
                router.push('/login');
            }, 5000);
        }
        reset();
        handleClose();

    };




    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Box sx={style}>
                        <TextField
                            {...register("expenseItem")}
                            sx={{marginTop: '2px'}}
                            label="Description"
                            multiline
                            maxRows={4}
                            helperText={errors.expenseItem ? errors.expenseItem.message : ''}
                        />
                        <TextField
                            {...register("expenseAmount")}
                            sx={{marginTop: '8px'}}
                            id="outlined-multiline-flexible"
                            label="Amount"
                            multiline
                            maxRows={1}
                            helperText={errors.expenseAmount ? errors.expenseAmount.message : ''}
                        />
                        <Typography mt={1} display='flex' alignItems='center' justifyContent='center'>
                            <Button
                                type="submit"
                                variant="contained" size='small' color='success'>
                                Submit
                            </Button>
                        </Typography>
                    </Box>
                </form>
            </Modal>
            <ToastContainer position="top-center"
                            theme="colored"/>
        </Box>
    );
};

export default ExpenseAddEditModal;