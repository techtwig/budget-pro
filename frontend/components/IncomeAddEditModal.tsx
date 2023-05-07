import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import axiosInstance from "@/axiosInstance";
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
    border: '2px solid #00CEAC',
    borderRadius: '2px',
    p: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
};

interface IincomeModal {
    id: string | null;
    open: boolean;
    handleClose: () => void;
    income_month: String;


}

const IncomeAddEditModal = ({ id, open, handleClose, income_month }: IincomeModal) => {

    const router = useRouter();

    //console.log(getIndividualBudget);
    const schema = yup.object().shape({
        income_source: yup.string().required('Please write your income source')
            .min(7, 'Write at least 7 characters')
            .max(20, 'Complete in 20 characters'),
        income_amount: yup.number().required('Amount is required')
            .positive('Amount must be positive')
            .integer('Amount must be positive integer'),
        category: yup.string().required('Category is required')
            .min(3, 'Write at least 3 characters')
            .max(20, 'Complete in 10 characters'),
    });

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        if (id) {
            axiosInstance.get(`http://localhost:5000/income/${id}`)
                .then(res => setFormData(res.data))
        }
    }, [id])

    useEffect(() => {
        if (id !== null) {
            reset({
                income_source: formData.income_source,
                income_amount: formData.income_amount,
                category: formData.category,
            })
        } else {
            reset({
                income_source: '',
                income_amount: '',
                category:''
            })
        }
    }, [id, reset, formData])

    const onSubmitHandler = async (incomeInfo: any) => {
        const totalIncomeInfo = { ...incomeInfo, income_month };
        try {
            if (!id) {
                await axiosInstance({
                    method: 'post',
                    url: 'http://localhost:5000/income',
                    data: totalIncomeInfo
                });
            } else {
                await axiosInstance.put(`http://localhost:5000/income/${id}`, totalIncomeInfo)
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
                            {...register("income_source")}
                            sx={{ marginTop: '2px' }}
                            label="Description"
                            fullWidth
                            maxRows={4}
                            helperText={errors.income_source ? errors.income_source.message : ''}
                        />
                        <TextField
                            {...register("income_amount")}
                            sx={{ marginTop: '8px' }}
                            id="outlined-multiline-flexible"
                            label="Amount"
                            fullWidth
                            type='number'
                            maxRows={1}
                            helperText={errors.income_amount ? errors.income_amount.message : ''}
                        />
                        <TextField
                            {...register("category")}
                            sx={{ marginTop: '8px' }}
                            id="outlined-multiline-flexible"
                            label="Category"
                            fullWidth
                            type='text'
                            maxRows={1}
                            helperText={errors.category ? errors.category.message : ''}
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
        </Box>
    );
};

export default IncomeAddEditModal;