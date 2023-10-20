'use client';
import {Container, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import CustomButtonText from '@/common/addTransaction/CustomButtonText';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';
import CustomBackButton from '@/common/button/CustomBackButton';
import {CustomStyles} from '@/utilities/enums';
import CustomExpenseForm from '@/common/customTransaction/CustomExpenseDorm';
import {useForm} from 'react-hook-form';
import dayjs, {Dayjs} from 'dayjs';
import CustomIncomeForm from '@/common/customTransaction/CustomIncomeForm';

const AddTransaction = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: {errors, isSubmitSuccessful},
  } = useForm();

  const handleTransaction = (data: any) => {
    data.transactionType = selectedIndex;
    return console.log('transaction', data);
  };
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
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
      <form onSubmit={handleSubmit(handleTransaction)}>
        <Grid container rowSpacing={0}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              alignItems: 'self-start',
              mb: '16px',
            }}>
            <CustomBackButton />
          </Grid>
          <Grid item xs={12} sx={{mb: '16px'}}>
            <Typography sx={{fontSize: '24px', fontWeight: '700'}}>
              Add Transaction
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{mb: '16px'}}>
            <Grid
              container
              sx={{
                width: '100%',
                backgroundColor: '#FAF9FA',
                borderRadius: '30px',
              }}>
              <Grid item xs={6}>
                <CustomButtonText
                  backGround={selectedIndex === 0 ? '#E7E6E6' : null}
                  onClickBtn={() => handleWalletClick(0)}>
                  Expenses
                </CustomButtonText>
              </Grid>
              <Grid item xs={6}>
                <CustomButtonText
                  backGround={selectedIndex === 1 ? '#E7E6E6' : null}
                  onClickBtn={() => handleWalletClick(1)}>
                  Incomes
                </CustomButtonText>
              </Grid>
            </Grid>
          </Grid>
          {selectedIndex === 0 && (
            <CustomExpenseForm
              handleSubmit={handleSubmit}
              control={control}
              register={register}
            />
          )}

          {selectedIndex === 1 && (
            <CustomIncomeForm
              handleSubmit={handleSubmit}
              control={control}
              register={register}
            />
          )}

          <Grid item xs={12}>
            <CustomActionButtonComponent>
              ADD TRANSACTION
            </CustomActionButtonComponent>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddTransaction;
