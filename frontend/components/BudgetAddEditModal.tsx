import React, {ReactNode, useEffect, useState} from 'react';
import {Box, Button, Input, Modal, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import axios from 'axios';
import theme from "../customTheme/theme";
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
    border:'2px solid #00CEAC',
    borderRadius:'2px',
    p: 4,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
};

interface IBudgetModal{
    id:string | null;
    open:boolean;
    handleClose:()=>void;
    budget_month: String;
}

const BudgetAddEditModal = ({id, open, handleClose, budget_month}:IBudgetModal) => {

    const router = useRouter();

    const schema = yup.object().shape({
        budget_item: yup.string().required('Please write your budget item')
            .min(7, 'Write at least 7 characters')
            .max(20, 'Complete in 20 characters'),
        budget_amount: yup.number().required('Amount is required')
            .positive('Amount must be positive')
            .integer('Amount must be positive integer')
    });

    const {register,control, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)});

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        if(id!==null) {
            axios.get(`http://localhost:5000/budget/${id}`)
                .then(res => setFormData(res.data))
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            reset({
                budget_item: formData.budget_item,
                budget_amount: formData.budget_amount
            })
        }
        else{
            reset({
                budget_item: '',
                budget_amount: ''
            })
        }
    }, [id, reset, formData]);

    const onSubmitHandler = async (budgetInfo: any) => {
        console.log({budgetInfo});
        //console.log(month);
        const totalBudgetInfo = {...budgetInfo,budget_month};
        console.log(totalBudgetInfo);
        console.log(id);
        try{
            if(!id){
                await axiosInstance({
                    method: 'post',
                    url: 'http://localhost:5000/budget',
                    data: totalBudgetInfo
                });
            }else{
                await axiosInstance.put(`http://localhost:5000/budget/${id}`, totalBudgetInfo)
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
                            {...register("budget_item")}
                            sx={{marginTop: '2px'}}
                            label="Description"
                            maxRows={4}
                            fullWidth
                            helperText={(errors.budget_item ? errors.budget_item.message : '') as ReactNode}
                        />
                        <TextField
                            {...register("budget_amount")}
                            sx={{marginTop: '8px'}}
                            id="outlined-multiline-flexible"
                            label="Amount"
                            type='number'
                            maxRows={1}
                            fullWidth
                            helperText={errors.budget_amount ? errors.budget_amount.message : ''}
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

export default BudgetAddEditModal;