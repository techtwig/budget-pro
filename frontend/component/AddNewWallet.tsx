'use client';
import {
  Autocomplete,
  Chip,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';
import {Controller, useForm} from 'react-hook-form';
import CustomSelectField from '@/common/input/CustomSelectField';
import {headers, wallets} from '@/utilities/helper';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import useNotiStack from '@/hooks/NotiStack';
import {BASE_URL} from '@/utilities/root';
import {useRouter} from 'next/navigation';

const schema = yup.object().shape({
  wallet_title: yup
    .string()
    .required('Require wallet name')
    .max(200, 'Title must be less than or equal to 200 words'),
  type_id: yup.object().required('Required a wallet type'),
  balance: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(100, 'minimun amount is greater than or equal to 100')
    .max(2000000, 'maximum amount is less than or equal to 2000000')
    .required('Required a minimum amount'),
});
interface IWallet {
  wallet_title: string;
  type_id: object;
  balance: number;
}
type IType = {
  id: number;
  label: string;
};
const AddNewWallet = () => {
  const Router = useRouter();
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

  const onSubmit = (data: IWallet) => {
    console.log('wallet data', data);
    // @ts-ignore
    data.type_id = data?.type_id?.id;
    axios
      .post(BASE_URL + '/wallet/create', data, {headers})
      .then(function (response) {
        successStack('Wallet created successfully');
        Router.push('/my-wallet');
      })
      .catch(function (response) {
        errorStack('Failed to create wallet');

        console.log(response);
      });
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
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Type <span style={{color: 'red'}}>*</span>
            </Typography>
            <FormControl
              sx={{
                width: '100%',
                '.MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}>
              <Controller
                name={'type_id'}
                control={control}
                rules={{
                  required: 'Please select a value',
                }}
                render={({field: {onChange}}) => (
                  <Autocomplete
                    id='tags-outlined'
                    options={wallets || []}
                    onChange={(event, option) => {
                      onChange(option);
                    }}
                    getOptionLabel={(option: IType) => {
                      return option ? option?.label : '';
                    }}
                    renderInput={(params: any) => (
                      <TextField {...params} placeholder='Type' />
                    )}
                    renderOption={(props, option: IType) => {
                      return (
                        <li {...props} key={option?.id}>
                          {option?.label}
                        </li>
                      );
                    }}
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map((option: IType, index: number) => (
                        <Chip
                          {...getTagProps({index})}
                          key={option?.id}
                          label={option?.label}
                        />
                      ));
                    }}
                  />
                )}
              />
              {errors.type_id && (
                <FormHelperText sx={{color: '#f44336'}}>
                  <>{errors.type_id.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/*<Grid item xs={12}>*/}
          {/*  <CustomSelectField*/}
          {/*    errors={errors}*/}
          {/*    required={true}*/}
          {/*    label={'Wallet Type'}*/}
          {/*    id={'type_id'}*/}
          {/*    options={wallets}*/}
          {/*    control={control}*/}
          {/*  />*/}
          {/*</Grid>*/}

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
