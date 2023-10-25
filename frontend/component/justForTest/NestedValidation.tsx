'use client';
import {useForm} from 'react-hook-form';
import {Container, Grid, TextField} from '@mui/material';
import React, {useEffect} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CustomStyles} from '@/utilities/enums';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  address: yup.object({
    zilla_id: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .required('Zilla code is required'),
    zilla_name: yup.string().required('Zilla name is required'),
  }),
});

interface IAddress {
  zilla_id: number;
  zilla_name: string;
}
interface IData {
  name: string;
  address: IAddress;
}
const NestedValidate = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm<IData>({resolver: yupResolver(schema)});
  const handleTransaction = (data: any) => {
    return console.log('valid of nested', data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
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
      <form onSubmit={handleSubmit(handleTransaction)} style={{width: '100%'}}>
        <Grid item xs={12} sx={{mb: '16px'}}>
          <TextField
            variant={'outlined'}
            placeholder={'Your Name'}
            {...register('name')}
            sx={{
              width: '100%',
            }}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>{' '}
        <Grid item xs={12} sx={{mb: '16px'}}>
          <TextField
            placeholder={'Zilla Code'}
            variant={'outlined'}
            {...register('address.zilla_id')}
            sx={{
              width: '100%',
            }}
            error={!!errors?.address?.zilla_id}
            helperText={errors?.address?.zilla_id?.message}
          />
        </Grid>{' '}
        <Grid item xs={12} sx={{mb: '16px'}}>
          <TextField
            placeholder={'Zilla Name'}
            variant={'outlined'}
            {...register('address.zilla_name')}
            sx={{
              width: '100%',
            }}
            error={!!errors?.address?.zilla_name}
            helperText={errors?.address?.zilla_name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <SubmitButton>ADD TRANSACTION</SubmitButton>
        </Grid>
      </form>
    </Container>
  );
};
export default NestedValidate;
