import {Controller, useForm} from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {headers} from '@/utilities/helper';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import React, {useEffect, useState} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import useNotiStack from '@/hooks/NotiStack';

const schema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .max(30, 'Title must be less than or equal to 30 words'),
  balance: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(100, 'minimum amount is greater than or equal to 100')
    .max(2000000, 'maximum amount is less than or equal to 2000000')

    .required('Balance is required'),
  wallet_id: yup.string().required('Wallet is required'),
  category_ids: yup.array().of(yup.string().required('Category is required')),

  date: yup
    .date()
    .required('Date is required')
    .max(new Date(), 'Date should be in Past'),
});
interface ISelect {
  _id: string;
  label: string;
}
interface IData {
  title: string;
  balance: number;
  wallet_id: number;
  category_ids: [ISelect];
  date: any;
}
const CustomIncomeForm = () => {
  const {successStack, errorStack} = useNotiStack();
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IData | any>({resolver: yupResolver(schema)});
  const handleTransaction = (data: any) => {
    // data.transaction_type = selectedIndex;

    axios
      .post('http://localhost:5000/income/create', data, {headers})
      .then(function (response) {
        //handle success
        successStack('Expense created successfully');

        console.log('response', response);
      })
      .catch(function (response) {
        errorStack('Failed to create expense');
        //handle error
        console.log(response);
      });
  };

  const [wallets, setWallets] = useState([{}]);
  const [categories, setCategories] = useState([{}]);

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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  console.log('error', errors);
  return (
    <form onSubmit={handleSubmit(handleTransaction)} style={{width: '100%'}}>
      <Grid item xs={12} sx={{mb: '16px'}}>
        <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
          Title <span style={{color: 'red'}}>*</span>
        </Typography>
        <TextField
          {...register('title')}
          sx={{
            width: '100%',
          }}
          placeholder='Description'
          InputProps={{
            sx: {
              borderRadius: '15px',
              border: '2px solid #F4F2F3',
            },
          }}
          error={!!errors.title}
          helperText={errors.title?.message?.toString()}
        />
      </Grid>
      <Grid item xs={12} sx={{mb: '16px'}}>
        <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
          Amount <span style={{color: 'red'}}>*</span>
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
          error={!!errors.balance}
          helperText={errors.balance?.message?.toString()}
        />
      </Grid>
      <Grid item xs={12} sx={{mb: '16px'}}>
        {/*<CustomSelectField*/}
        {/*  errors={errors}*/}
        {/*  required={true}*/}
        {/*  label={'Wallet Type'}*/}
        {/*  id={'wallet_id'}*/}
        {/*  options={wallets}*/}
        {/*  control={control}*/}
        {/*/>*/}

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
          Expense category <span style={{color: 'red'}}>*</span>
        </Typography>
        <FormControl
          sx={{
            width: '100%',
          }}>
          {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
          <Controller
            control={control}
            name={'category_ids'}
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
          {errors.category_ids && (
            <FormHelperText sx={{color: '#D92F21'}}>
              <>{errors.category_ids.message}</>
            </FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
          Date
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
            name={'date'}
            control={control}
            render={({field: {onChange, value}}) => {
              return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value ? new Date(value) : null}
                    onChange={onChange}
                  />
                </LocalizationProvider>
              );
            }}
          />
          {errors.date && (
            <FormHelperText error>
              <> {errors.date?.message}</>
            </FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <SubmitButton>ADD TRANSACTION</SubmitButton>
      </Grid>
    </form>
  );
};
export default CustomIncomeForm;
