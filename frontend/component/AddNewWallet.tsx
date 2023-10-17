'use client';
import {Container, Grid, MenuItem, TextField, Typography} from '@mui/material';
import React from 'react';
import {budget, currencies, wallets} from '@/common/ListedData';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import {CustomStyles} from '@/core/enums';
import CustomBackButton from '@/common/button/CustomBackButton';
import {Controller, useForm} from 'react-hook-form';
import {CustomTextInput} from '@/common/fromData/CiustomTextInput';

const AddNewWallet = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data: any) => {
    console.log('from data', data);
  };
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
            Add new wallet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Wallet Name
          </Typography>
          {/*<CustomTextInput></CustomTextInput>*/}
          <Grid item xs={12}>
            <Controller
              control={control}
              name='wallet_name'
              render={({field}) => (
                <TextField
                  sx={{width: '100%'}}
                  {...field}
                  placeholder='Wallet Name'
                  type='wallet_name'
                  autoComplete='wallet-name'
                  InputProps={{
                    sx: {
                      borderRadius: '15px',
                      border: '2px solid #F4F2F3',
                    },
                  }}
                />
              )}
            />
          </Grid>

          {/*<TextField*/}
          {/*  sx={{width: '100%'}}*/}
          {/*  id='budget-name'*/}
          {/*  placeholder='Wallet Name'*/}
          {/*  type='wallet-name'*/}
          {/*  autoComplete='wallet-name'*/}
          {/*  InputProps={{*/}
          {/*    sx: {*/}
          {/*      borderRadius: '15px',*/}
          {/*      border: '2px solid #F4F2F3',*/}
          {/*    },*/}
          {/*  }}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={1.4}>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
                Type
              </Typography>
              <Controller
                control={control}
                name='wallet_type'
                render={({field}) => (
                  <TextField
                    {...field}
                    sx={{width: '100%'}}
                    id='wallet_type'
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
                )}
              />
              {/*<TextField*/}
              {/*  sx={{width: '100%'}}*/}
              {/*  id='wallet'*/}
              {/*  select*/}
              {/*  defaultValue='wallets'*/}
              {/*  InputProps={{*/}
              {/*    sx: {*/}
              {/*      borderRadius: '15px',*/}
              {/*      border: '2px solid #F4F2F3',*/}
              {/*    },*/}
              {/*  }}>*/}
              {/*  {wallets.map((option) => (*/}
              {/*    <MenuItem key={option.title} value={option.title}>*/}
              {/*      {option.label}*/}
              {/*    </MenuItem>*/}
              {/*  ))}*/}
              {/*</TextField>*/}
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
                Budget Name
              </Typography>

              <Controller
                control={control}
                name='currency_type'
                render={({field}) => (
                  <TextField
                    {...field}
                    sx={{width: '100%'}}
                    id='currency_type'
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
                )}
              />
              {/*<TextField*/}
              {/*  sx={{width: '100%'}}*/}
              {/*  id='currency'*/}
              {/*  select*/}
              {/*  defaultValue='EUR'*/}
              {/*  InputProps={{*/}
              {/*    sx: {*/}
              {/*      borderRadius: '15px',*/}
              {/*      border: '2px solid #F4F2F3',*/}
              {/*    },*/}
              {/*  }}>*/}
              {/*  {currencies.map((option) => (*/}
              {/*    <MenuItem key={option.title} value={option.title}>*/}
              {/*      {option.label}*/}
              {/*    </MenuItem>*/}
              {/*  ))}*/}
              {/*</TextField>*/}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Initial Balance
          </Typography>
          <Controller
            control={control}
            name='wallet_balance'
            render={({field}) => (
              <TextField
                sx={{width: '100%'}}
                {...field}
                placeholder='Wallet Name'
                type='number'
                autoComplete='wallet_balance'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                  },
                }}
              />
            )}
          />
          {/*<TextField*/}
          {/*  sx={{width: '100%'}}*/}
          {/*  id='initial_balance'*/}
          {/*  placeholder='Add a balace'*/}
          {/*  InputProps={{*/}
          {/*    sx: {*/}
          {/*      borderRadius: '15px',*/}
          {/*      border: '2px solid #F4F2F3',*/}
          {/*    },*/}
          {/*  }}></TextField>*/}
        </Grid>
        <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
          <CustomActionButtonComponent onClickBtn={handleSubmit(onSubmit)}>
            ADD A WALLET
          </CustomActionButtonComponent>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AddNewWallet;
