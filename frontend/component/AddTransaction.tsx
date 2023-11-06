'use client';
import {Container, Grid, Typography} from '@mui/material';
import React, {useState} from 'react';
import TabItem from '@/common/button/TabItem';
import BackButton from '@/common/button/BackButton';
import {CustomStyles} from '@/utilities/enums';
import IncomeForm from '@/component/transaction/IncomeForm';
import ExpenseForm from '@/component/transaction/ExpenseForm';

const AddTransaction = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
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
      <Grid container rowSpacing={0}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'self-start',
            mb: '16px',
          }}>
          <BackButton />
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
              <TabItem
                backGround={selectedIndex === 0 ? '#E7E6E6' : null}
                onClickBtn={() => handleWalletClick(0)}>
                Expenses
              </TabItem>
            </Grid>
            <Grid item xs={6}>
              <TabItem
                backGround={selectedIndex === 1 ? '#E7E6E6' : null}
                onClickBtn={() => handleWalletClick(1)}>
                Incomes
              </TabItem>
            </Grid>
          </Grid>
        </Grid>
        {selectedIndex === 0 && <ExpenseForm />}

        {selectedIndex === 1 && <IncomeForm />}
      </Grid>
    </Container>
  );
};
export default AddTransaction;
