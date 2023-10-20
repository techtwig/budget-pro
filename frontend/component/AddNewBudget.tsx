'use client';
import {
  Container,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, {useEffect} from 'react';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import {CustomStyles} from '@/utilities/enums';
import CustomBackButton from '@/common/button/CustomBackButton';
import {category, currencies, wallets} from '@/utilities/helper';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import CustomSelectField from '@/common/input/CustomSelectField';
import * as yup from 'yup';

const schema = yup.object().shape({
  budget_title: yup.string().required('Require budget name'),
  budget_amount: yup.number().required('Require amount'),
  category_id: yup.number().required('Require a catagory'),
  wallet_id: yup.number().required('Require wallet type'),
});

interface walletData {
  budget_title: string;
  budget_amount: number;
  category_id: number;
  wallet_id: number;
}

const AddNewBudget = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm<walletData>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const handleClick = (data: any) => {
    console.log('from data', data);
  };
  console.log('error', errors);
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
      <form onSubmit={handleSubmit(handleClick)}>
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
            />
            <FormHelperText error sx={{color: 'red'}}>
              {errors?.budget_title && errors.budget_title.message}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Amount <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              InputLabelProps={{
                required: true,
              }}
              {...register('budget_amount', {valueAsNumber: true})}
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
            />
            <FormHelperText error sx={{color: 'red'}}>
              {errors?.budget_amount && errors.budget_amount.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <CustomSelectField
              errors={errors}
              required={true}
              label={'Wallet'}
              id={'wallet_id'}
              options={wallets}
              control={control}
            />
            <FormHelperText sx={{color: 'red'}}>
              {errors?.wallet_id && errors.wallet_id.message}
            </FormHelperText>
          </Grid>
          <Grid item xs={12}>
            <CustomSelectField
              errors={errors}
              required={true}
              label={'Budget Category'}
              id={'category_id'}
              options={category}
              control={control}
            />
            <FormHelperText sx={{color: 'red'}}>
              {errors?.category_id && errors.category_id.message}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <CustomActionButtonComponent>
              ADD A BUDGET
            </CustomActionButtonComponent>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewBudget;
