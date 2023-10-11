'use client';
import {Box, Container, Grid, Typography} from '@mui/material';
import CustomCardDashboard from '@/common/CustomCardDashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomCardDashboardTwo from '@/common/CustomCardDashboardTwo';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';
import TurnSlightRightRoundedIcon from '@mui/icons-material/TurnSlightRightRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import Footer from '@/common/footer/Footer';

const DashBoard = () => {
  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF'}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#D1CED8',
            width: '100%',
            borderBottomRightRadius: '20px',
            borderBottomLeftRadius: '20px',
          }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{fontSize: '18px', fontWeight: '700', mt: '40px'}}>
                Total Balance
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{fontSize: '35px', pt: '-10px', fontWeight: '700'}}>
                $2,600
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{}}>
                <Grid xs={4}>
                  <CustomCardDashboard
                    title={'Monobank'}
                    amount={'$1,250'}
                    icons={
                      <AccountBalanceIcon
                        sx={{color: '#fff', fontSize: '250%'}}
                      />
                    }
                  />
                </Grid>{' '}
                <Grid xs={4}>
                  <CustomCardDashboard
                    title={'Monobank'}
                    amount={'$1,250'}
                    icons={
                      <AccountBalanceIcon
                        sx={{color: '#fff', fontSize: '250%'}}
                      />
                    }
                  />
                </Grid>{' '}
                <Grid xs={4}>
                  <CustomCardDashboard
                    title={'Monobank'}
                    amount={'$1,250'}
                    icons={
                      <AccountBalanceIcon
                        sx={{color: '#fff', fontSize: '250%'}}
                      />
                    }
                  />
                </Grid>{' '}
                <Grid xs={4}>
                  <CustomCardDashboard
                    title={'Monobank'}
                    amount={'$1,250'}
                    icons={
                      <AccountBalanceIcon
                        sx={{color: '#fff', fontSize: '250%'}}
                      />
                    }
                  />
                </Grid>{' '}
                <Grid xs={4}>
                  <CustomCardDashboard
                    title={'Monobank'}
                    amount={'$1,250'}
                    icons={
                      <AccountBalanceIcon
                        sx={{color: '#fff', fontSize: '250%'}}
                      />
                    }
                  />
                </Grid>
                {/*<CustomCardDashboard*/}
                {/*  title={'Revolut'}*/}
                {/*  amount={'$884.25'}*/}
                {/*  icons={*/}
                {/*    <FloodRoundedIcon sx={{color: '#fff', fontSize: '250%'}} />*/}
                {/*  }*/}
                {/*/>*/}
                {/*<CustomCardDashboard*/}
                {/*  title={'PayPal'}*/}
                {/*  amount={'$320'}*/}
                {/*  icons={*/}
                {/*    <InventoryIcon sx={{color: '#fff', fontSize: '250%'}} />*/}
                {/*  }*/}
                {/*/>*/}
                {/*<CustomCardDashboard*/}
                {/*  title={'PayPal'}*/}
                {/*  amount={'$320'}*/}
                {/*  icons={*/}
                {/*    <InventoryIcon sx={{color: '#fff', fontSize: '250%'}} />*/}
                {/*  }*/}
                {/*/>*/}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomCardDashboardTwo
                title={'Monthly Budget'}
                amount={'$1500'}
                icons={<RadarRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardDashboardTwo
                title={'Incomes'}
                amount={'$2600'}
                icons={<SouthWestRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardDashboardTwo
                title={'Expenses'}
                amount={'$1000'}
                icons={<TurnSlightRightRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardDashboardTwo
                title={'Savings'}
                amount={'$800'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: '15px ',
                padding: '15px 8px',
              }}>
              <Box
                sx={{
                  textAlign: 'left',
                  fontWeight: '700',
                  fontSize: '20px',
                }}>
                Recent transactions
              </Box>
              <Box
                sx={{
                  color: '#000',

                  textAlign: 'right',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
                onClick={() => console.log('ddd')}>
                See all {'>'}
              </Box>
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Footer currentOption={0} />
      </Grid>
    </Container>
  );
};
export default DashBoard;
