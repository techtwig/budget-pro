'use client';
import {
  Container,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import {CustomStyles} from '@/utilities/enums';
import CustomBackButton from '@/common/button/CustomBackButton';
import {useForm} from 'react-hook-form';
import CustomSelectField from '@/common/input/CustomSelectField';
import {wallets} from '@/utilities/helper';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';

const schema = yup.object().shape({
  wallet_title: yup.string().required('Require wallet name'),
  type_id: yup.number().required('Require currency type'),
  balance: yup.number().required('Require amount'),
});
interface IWallet {
  wallet_title: string;
  type_id: number;
  balance: number;
}
const AddNewWallet = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IWallet>({
    resolver: yupResolver(schema),
  });
  const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmI5ODk4MTQ1YzA4OWZjN2IyMjkzYSIsImlhdCI6MTY5NzM2MzM1OSwiZXhwIjoxNjk5OTU1MzU5fQ.qau-JdK1l7fVhzWWGiiBw_4q_UMniSrTvQB3pveztQI',
  };

  console.log('errors->', errors);
  const onSubmit = (data: IWallet) => {
    axios.post('http://localhost:5000/wallet/create', data, {headers}).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
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
            <CustomBackButton />
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
              />
              <FormHelperText error sx={{color: 'red'}}>
                {errors?.wallet_title && errors.wallet_title.message}
              </FormHelperText>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomSelectField
              errors={errors}
              required={true}
              label={'Type'}
              id={'type_id'}
              options={wallets}
              control={control}
            />
            <FormHelperText sx={{color: 'red'}}>
              {errors?.type_id && errors.type_id.message}
            </FormHelperText>
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
              type='number'
            />
            <FormHelperText error sx={{color: 'red'}}>
              {errors?.balance && errors.balance.message}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <CustomActionButtonComponent>
              CREATE WALLET
            </CustomActionButtonComponent>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewWallet;
