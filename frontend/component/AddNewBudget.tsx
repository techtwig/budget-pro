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
import React, {useEffect} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';
import {category, currencies, wallets} from '@/utilities/helper';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import CustomSelectField from '@/common/input/CustomSelectField';
import * as yup from 'yup';

const schema = yup.object().shape({
  budget_title: yup.string().required('Require budget name'),
  budget_amount: yup.number().required('Require amount'),
  category_id: yup
    .array(yup.number().required())
    .required('Category is required'),
  wallet_id: yup.number().required('Required wallet type'),
});
interface ISelect {
  id: number;
  label: string;
}
interface walletData {
  budget_title: string;
  budget_amount: number;
  category_id: [ISelect];
  wallet_id: number;
}

const AddNewBudget = () => {
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
  } = useForm<walletData | any>({
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
              error={!!errors.budget_amount}
              helperText={errors.budget_amount?.message?.toString()}
            />
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
          </Grid>
          {/*<Grid item xs={12}>*/}
          {/*  <CustomSelectField*/}
          {/*    errors={errors}*/}
          {/*    required={true}*/}
          {/*    label={'Budget Category'}*/}
          {/*    id={'category_id'}*/}
          {/*    options={category}*/}
          {/*    control={control}*/}
          {/*  />*/}
          {/*</Grid>*/}
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
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <SubmitButton>ADD A BUDGET</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewBudget;
