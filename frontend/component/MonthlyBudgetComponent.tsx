'use client';
import {Button, Container, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, {useState} from 'react';
import CustomButtonText from '@/common/addTransaction/CustomButtonText';
import CustomBudgetCard from '@/common/budget/CustomCardBudget';
import {useRouter} from 'next/navigation';

const MonthlyBudgetComponent = () => {
  const Router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };
  const handleBack = () => {
    return Router.back();
  };
  const handleBudget = () => {
    return Router.push('/add-new-budget', {scroll: false});
  };

  return (
    <Container maxWidth={'xs'}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#FEFEFF',
        }}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'self-start',
          }}>
          <Button onClick={handleBack}>
            <KeyboardBackspaceIcon
              sx={{
                color: '#403F40',
                backgroundColor: '#fff',
                borderRadius: '8px',
                p: '2px',
                fontSize: '200%',
                mt: '12px',
                border: '2px solid #EEEDEE',
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '20px', fontWeight: '700', pl: '13px'}}>
            Monthly Budget
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'inherit',
            alignItems: 'end',
          }}>
          <Typography sx={{fontSize: '28px', fontWeight: '700', pl: '13px'}}>
            $2,500
          </Typography>
          <Typography
            sx={{fontSize: '13px', fontWeight: '700', pl: '15px', pb: '6px'}}>
            in 10 categories
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mr: '16px'}}>
          <Grid
            container
            sx={{
              width: '100%',
              backgroundColor: '#FAF9FA',
            }}>
            <Grid item xs={6}>
              <CustomButtonText
                backGround={selectedIndex === 0 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(0)}>
                Expenses
              </CustomButtonText>
            </Grid>
            <Grid item xs={6}>
              <CustomButtonText
                backGround={selectedIndex === 1 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(1)}>
                Savings
              </CustomButtonText>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container rowSpacing={3}>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'$200.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'$200.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomBudgetCard
                title={'Burger'}
                budgetTitle={'2500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{mr: '16px', position: 'fixed', bottom: '10px'}}>
          <Button
            onClick={handleBudget}
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: '25px',
              backgroundColor: '#343333',
              height: '50px',
              position: 'fixed',
              bottom: '0px',
              width: '380px',
            }}>
            CREATE NEW BUDGET
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MonthlyBudgetComponent;
