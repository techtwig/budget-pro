import React from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from 'axios';


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

interface IBudgetModal{
    open:boolean;
    handleClose:()=>void;
    budget_month:string;
}

const BudgetModal = ({open, handleClose,budget_month}:IBudgetModal) => {
    const schema = yup.object().shape({
        budget_item: yup.string().required('Please give a description of your budget')
            .min(10, 'Write at least 20 characters')
            .max(40, 'Complete in 40 characters'),
        budget_amount: yup.number().required('Amount is required')
            .positive('Amount must be positive')
            .integer('Amount must be positive integer')
    });

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = async (budgetInfo: any) => {
        //console.log({budgetInfo});
        //console.log(month);
        const totalBudgetInfo = {...budgetInfo,budget_month};
        console.log(totalBudgetInfo);
        try{
            await axios({
                method: 'post',
                url: 'http://localhost:5000/budget',
                data: totalBudgetInfo
            });
        }catch(e){
            console.log(e);
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
                                    multiline
                                    maxRows={4}
                                />
                                <TextField
                                    {...register("budget_amount")}
                                    sx={{marginTop: '8px'}}
                                    id="outlined-multiline-flexible"
                                    label="Amount"
                                    multiline
                                    maxRows={1}
                                />
                                {errors['budget_amount']?.message &&
                                    <Typography color='red'>
                                        Please enter a valid amount.
                                    </Typography>
                                }
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

export default BudgetModal;