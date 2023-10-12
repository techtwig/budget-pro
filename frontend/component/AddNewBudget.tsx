'use client';
import {Container, Grid, MenuItem, TextField, Typography} from '@mui/material';
import React from 'react';
import {budget, currencies, wallets} from '@/common/ListedData';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import {CustomStyles} from '@/core/enums';
import CustomBackButton from '@/common/button/CustomBackButton';

const AddNewBudget = () => {
  const handleClick = () => {
    return console.log('Add a budget page');
  };
  return (
    <Container
      maxWidth={'xs'}
      disableGutters={true}
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FEFEFF',
        pt: CustomStyles.CONTAINER_TOP,
        pl: CustomStyles.CONTAINER_LEFT,
        pr: CustomStyles.CONTAINER_RIGHT,
        pb: '100px',
        position: 'relative',
      }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <CustomBackButton />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
            Add new budget
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '100%'}}
            id='budget-name'
            placeholder='Budget Name'
            type='budget-name'
            autoComplete='current-password'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={1.4}>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
                Amount
              </Typography>
              <TextField
                sx={{width: '100%'}}
                id='budget-name'
                placeholder='$0'
                type='budget-name'
                autoComplete='current-password'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
                Budget Name
              </Typography>
              <TextField
                sx={{width: '100%'}}
                id='currency'
                select
                defaultValue='EUR'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                  },
                }}>
                {currencies.map((option) => (
                  <MenuItem key={option.title} value={option.title}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '100%'}}
            id='currency'
            select
            defaultValue='wallets'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}>
            {wallets.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '100%'}}
            id='currency'
            select
            defaultValue='expenses'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}>
            {budget.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
          <CustomActionButtonComponent onClickBtn={handleClick}>
            ADD A BUDGET
          </CustomActionButtonComponent>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AddNewBudget;
