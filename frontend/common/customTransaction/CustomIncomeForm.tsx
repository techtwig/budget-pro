import {Controller, useForm} from 'react-hook-form';
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import CustomSelectField from '@/common/input/CustomSelectField';
import {category, wallets} from '@/utilities/helper';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import React, {useEffect} from 'react';
import dayjs, {Dayjs} from 'dayjs';

const CustomIncomeForm = ({register, errors, control}: any) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-04-17'));

  return (
    <>
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
        />
        <FormHelperText error sx={{color: 'red'}}>
          {/*{errors?.balance && errors.balance.message}*/}
        </FormHelperText>
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
        <FormHelperText sx={{color: 'red'}}>
          {/*{errors.wallet_id && errors.wallet_id.message}*/}
        </FormHelperText>
      </Grid>

      <Grid item xs={12} sx={{mb: '16px'}}>
        <CustomSelectField
          errors={errors}
          required={true}
          label={'Income category'}
          id={'category_id'}
          options={category}
          control={control}
        />
        <FormHelperText sx={{color: 'red'}}>
          {/*{errors?.category_id && errors.category_id.message}*/}
        </FormHelperText>
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
        </FormControl>
      </Grid>
    </>
  );
};
export default CustomIncomeForm;
