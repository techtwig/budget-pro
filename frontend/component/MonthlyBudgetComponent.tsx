'use client';
import {Container, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import React, {useState} from 'react';
import CustomButtonText from '@/common/addTransaction/CustomButtonText';
import CustomBudgetCard from '@/common/budget/CustomCardBudget';
import {useRouter} from 'next/navigation';
import CustomBackButton from '@/common/button/CustomBackButton';
import {CustomStyles} from '@/utilities/enums';
import CustomActionButtonComponent from '@/common/button/CustomActionButtonComponent';

const MonthlyBudgetComponent = () => {
  const Router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };
  const handleBudget = () => {
    return Router.push('/add-new-budget', {scroll: false});
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
      <Grid
        container
        rowSpacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Grid item xs={12}>
          <CustomBackButton />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
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
          <Typography sx={{fontSize: '28px', fontWeight: '700'}}>
            $2,500
          </Typography>
          <Typography
            sx={{fontSize: '13px', fontWeight: '700', pl: '12px', pb: '6px'}}>
            in 10 categories
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
          <Grid container rowSpacing={1.5}>
            <Grid item xs={12}>
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
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
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
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
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
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
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
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomBudgetCard
                title={'Products'}
                budgetTitle={'200.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '6px',
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomBudgetCard
                title={'Technologies'}
                budgetTitle={'500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomBudgetCard
                title={'Technologies'}
                budgetTitle={'500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomBudgetCard
                title={'Technologies'}
                budgetTitle={'500.00'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      fontSize: '230%',
                      backgroundColor: '#E8E6E9',
                      borderRadius: '10px',
                      p: '5px',
                      m: '10px 5px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            // width: '300px',
            bottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/*<Button*/}
          {/*  onClick={handleBudget}*/}
          {/*  type='submit'*/}
          {/*  fullWidth*/}
          {/*  variant='contained'*/}
          {/*  sx={{*/}
          {/*    mt: 3,*/}
          {/*    mb: 2,*/}
          {/*    borderRadius: '25px',*/}
          {/*    backgroundColor: '#343333',*/}
          {/*    height: '50px',*/}
          {/*    position: 'fixed',*/}
          {/*    bottom: '0px',*/}
          {/*    width: '444px',*/}
          {/*  }}>*/}
          {/*  CREATE NEW BUDGET*/}
          {/*</Button>*/}
          <CustomActionButtonComponent onClickBtn={handleBudget}>
            CREATE NEW BUDGET
          </CustomActionButtonComponent>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MonthlyBudgetComponent;
