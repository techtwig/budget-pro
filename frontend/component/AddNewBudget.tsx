'use client';
import {
  Container,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {headers} from '@/utilities/helper';
import useNotiStack from '@/hooks/NotiStack';

const schema = yup.object().shape({
  budget_title: yup
    .string()
    .required('Require budget name')
    .max(30, 'Title must be less than or equal to 30 words'),
  amount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(100, 'minimun amount is greater than or equal to 100')
    .max(2000000, 'maximum amount is less than or equal to 2000000')

    .required('Require amount'),

  category_id: yup
    .array(yup.string().required())
    .required('Category is required'),
  wallet_id: yup.string().required('Required wallet type'),
});
interface ISelect {
  _id: string;
  label: string;
}
interface walletData {
  budget_title: string;
  amount: number;
  category_id: [ISelect];
  wallet_id: string;
}

const AddNewBudget = () => {
  const {successStack, errorStack} = useNotiStack();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm<walletData | any>({
    resolver: yupResolver(schema),
  });
  const [categories, setCategories] = useState([{}]);
  const [wallets, setWallets] = useState([{}]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/category')
      .then((response) => setCategories(response.data.data));

    axios
      .get('http://localhost:5000/wallet')
      .then((response) => setWallets(response.data.data));
  }, []);

  console.log('wallets', wallets);
  console.log('Categories', wallets);

  const handleSubmitData = (data: any) => {
    axios
      .post('http://localhost:5000/budget/create', data, {headers})
      .then(function (response) {
        //handle success
        successStack('Budget created successfully');

        console.log('response', response);
      })
      .catch(function (response) {
        errorStack('Failed to create budget');
        //handle error
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
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <BackButton />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
              Add new budget
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Budget Name <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              InputLabelProps={{
                required: true,
              }}
              {...register('budget_title')}
              sx={{
                width: '100%',
              }}
              placeholder='Budget name'
              InputProps={{
                sx: {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}
              type='text'
              error={!!errors.budget_title}
              helperText={errors.budget_title?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Amount <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              InputLabelProps={{
                required: true,
              }}
              {...register('amount', {valueAsNumber: true})}
              sx={{
                width: '100%',
              }}
              placeholder='0'
              InputProps={{
                sx: {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}
              type='number'
              error={!!errors.amount}
              helperText={errors.amount?.message?.toString()}
            />
          </Grid>

          <Grid item xs={12}>
            {/*<CustomSelectField*/}
            {/*  errors={errors}*/}
            {/*  required={true}*/}
            {/*  label={'Wallet'}*/}
            {/*  id={'wallet_id'}*/}
            {/*  options={wallets}*/}
            {/*  optionId={'_id'}*/}
            {/*  optionLabel={'wallet_title'}*/}
            {/*  control={control}*/}

            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Wallet<span style={{color: 'red'}}>*</span>
            </Typography>

            <FormControl
              sx={{
                width: '100%',
              }}>
              {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
              <Controller
                control={control}
                name={'wallet_id'}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, value}}) => (
                  <Select
                    sx={{
                      borderRadius: '15px',
                      border: '2px solid #F4F2F3',
                      height: '55px',
                    }}
                    labelId='level-label'
                    value={value || ''}
                    onChange={onChange}
                    // displayEmpty
                  >
                    {wallets.map((option: any, index: number) => (
                      <MenuItem key={index} value={option._id}>
                        {option.wallet_title}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              {errors.wallet_id && (
                <FormHelperText error>
                  <>{errors?.wallet_id?.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{mb: '16px'}}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Budget For <span style={{color: 'red'}}>*</span>
            </Typography>
            <FormControl
              sx={{
                width: '100%',
              }}>
              {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
              <Controller
                control={control}
                name={'category_id'}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, value}}) => (
                  <Select
                    sx={{
                      borderRadius: '15px',
                      border: '2px solid #F4F2F3',
                      height: '55px',
                    }}
                    multiple
                    labelId='level-label'
                    value={value || []}
                    onChange={onChange}
                    // displayEmpty
                  >
                    {categories.map((option: any, index) => (
                      <MenuItem key={index} value={option._id}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.category_id && (
                <FormHelperText sx={{color: '#D92F21'}}>
                  <>{errors.category_id.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <SubmitButton>ADD A BUDGET</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewBudget;
