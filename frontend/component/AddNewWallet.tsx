'use client';
import {Container, Grid, TextField, Typography} from '@mui/material';
import React, {useEffect} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';
import {useForm} from 'react-hook-form';
import CustomSelectField from '@/common/input/CustomSelectField';
import {headers, wallets} from '@/utilities/helper';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import useNotiStack from '@/hooks/NotiStack';

const schema = yup.object().shape({
  wallet_title: yup
    .string()
    .required('Require wallet name')
    .max(30, 'Title must be less than or equal to 30 words'),
  type_id: yup.number().required('Currency type is required'),
  balance: yup.number().required('Minimum amount is required'),
});
interface IWallet {
  wallet_title: string;
  type_id: number;
  balance: number;
}
const AddNewWallet = () => {
  const {successStack, errorStack} = useNotiStack();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IWallet>({
    resolver: yupResolver(schema),
  });

  console.log('errors->', errors);

  const onSubmit = (data: IWallet) => {
    axios
      .post('http://localhost:5000/wallet/create', data, {headers})
      .then(function (response) {
        //handle success
        successStack('Wallet created successfully');

        console.log('response', response);
      })
      .catch(function (response) {
        errorStack('Failed to create wallet');
        //handle error
        console.log(response);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <BackButton />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
              Add new wallet
            </Typography>
          </Grid>
          {/*<Form onSubmit={handleSubmit}>*/}
          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Wallet Name <span style={{color: 'red'}}>*</span>
            </Typography>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{
                  required: true,
                }}
                {...register('wallet_title')}
                sx={{
                  width: '100%',
                }}
                placeholder='Card name'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                  },
                }}
                type='text'
                error={!!errors.wallet_title}
                helperText={errors.wallet_title?.message}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomSelectField
              errors={errors}
              required={true}
              label={'Wallet Type'}
              id={'type_id'}
              options={wallets}
              control={control}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Initial Balance <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              {...register('balance')}
              sx={{
                width: '100%',
              }}
              placeholder='Wallet balance'
              InputProps={{
                sx: {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}
              type='mixed'
              error={!!errors.balance}
              helperText={errors.balance?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <SubmitButton>CREATE WALLET</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewWallet;
