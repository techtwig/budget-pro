import React, {useEffect} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import BudgetModal from "./BudgetModal";

interface IGetBudgetInfo {
    budgetInfo:{
        budget_item: string;
        budget_amount: number;
        _id: string;
    }
    deleteBudget:(_id:string)=>void;
    handleOpen:()=>void;

}




const BudgetList = ({budgetInfo,deleteBudget,handleOpen}:IGetBudgetInfo) => {

    // const deleteBudget = async (_id:string) => {
    //     await axios.delete(`http://localhost:5000/budget/${_id}`);
    //
    //
    // }

    const editModal= ()=>{
        console.log('Edit button clicked');
        handleOpen();

    }


    return (
        <Box mt={2}>
            <Card sx={{ bgcolor:'#FF9800'}}>
                <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                       <Typography variant="h6" component="h6" mr={1} color='#212121'>
                           {budgetInfo.budget_item}
                       </Typography>
                       <Typography variant="h6" component="h6" mr={1} color='#212121'>
                           {budgetInfo.budget_amount}
                       </Typography>

                        <IconButton
                            onClick={()=>editModal()}
                            aria-label="edit"
                            size="medium"
                            sx={{color:'#FFFFFF'}} >
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                            onClick={() => deleteBudget(budgetInfo._id)}
                            aria-label="delete"
                            size="large"
                            sx={{color:'#FFFFFF'}} >
                            <DeleteIcon fontSize="medium" />
                        </IconButton>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BudgetList;