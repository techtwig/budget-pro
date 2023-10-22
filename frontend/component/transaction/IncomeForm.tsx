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
import CustomSelectField from '@/common/input/CustomSelectField';
import {category, wallets} from '@/utilities/helper';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import React, {useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import SubmitButton from '@/common/button/SubmitButton';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  balance: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .required('Balance is required'),
  wallet_id: yup.number().required('Wallet is required'),
  category_id: yup.array(yup.number()).required('Category is required'),
  date: yup.date().max(new Date(), 'Date cannot be in the future'),
});
interface ISelect {
  id: number;
  label: string;
}
interface IData {
  title: string;
  balance: number;
  wallet_id: number;
  category_id: [ISelect];
  date?: any;
}
const CustomIncomeForm = ({selectedIndex}: any) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IData | any>({resolver: yupResolver(schema)});
  const handleTransaction = (data: any) => {
    data.transaction_type = selectedIndex;
    return console.log('transaction', data);
  };
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
        <CustomSelectField
          errors={errors}
          required={true}
          label={'Wallet Type'}
          id={'wallet_id'}
          options={wallets}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sx={{mb: '16px'}}>
        <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
          Income Category <span style={{color: 'red'}}>*</span>
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
                {category.map((option: any) => (
                  <MenuItem key={option.id} value={option.id}>
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
