'use client';
import {Box, Container, Grid, Typography} from '@mui/material';
import DashboardCard from '@/common/DashboardCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';
import TurnSlightRightRoundedIcon from '@mui/icons-material/TurnSlightRightRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import Footer from '@/common/footer/Footer';
import {CustomStyles} from '@/utilities/enums';
import DashboardCard2 from '@/common/DashboardCard2';

const baseURL = 'https://localhost:5000/income';

const DashBoard = () => {
  return (
    <Container
      maxWidth={'xs'}
      disableGutters={true}
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FEFEFF',
        // pt: CustomStyles.CONTAINER_TOP,
        // pl: CustomStyles.CONTAINER_LEFT,
        // pr: CustomStyles.CONTAINER_RIGHT,
        pb: '100px',
        position: 'relative',
      }}>
      <Grid container rowSpacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#D1CED8',
            width: '100%',
            pt: CustomStyles.CONTAINER_TOP,
            pl: CustomStyles.CONTAINER_LEFT,
            pr: CustomStyles.CONTAINER_RIGHT,
            borderBottomRightRadius: '20px',
            borderBottomLeftRadius: '20px',
          }}>
          <Grid container rowSpacing={1}>
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
            <Grid
              item
              xs={12}
              sx={{
                // mb: '0px',
                overflowX: 'auto',
                // overflowY: 'hidden',
                display: 'flex',
                gap: '12px',
              }}>
              <Box>
                <DashboardCard
                  title={'Mono bank'}
                  amount={50}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
              </Box>
              <Box>
                <DashboardCard
                  title={'China bank'}
                  amount={1250}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
              </Box>
              <Box>
                <DashboardCard
                  title={'Dhaka bank'}
                  amount={1250}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
              </Box>
              <Box>
                <DashboardCard
                  title={'Mono bank'}
                  amount={1250}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
              </Box>
              <Box>
                <DashboardCard
                  title={'Mono bank'}
                  amount={1250}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            sx={{
              pt: CustomStyles.CONTAINER_TOP,
              pl: CustomStyles.CONTAINER_LEFT,
              pr: CustomStyles.CONTAINER_RIGHT,
            }}>
            <Grid item xs={6}>
              <DashboardCard2
                title={'Monthly Budget'}
                amount={'$1500'}
                icons={<RadarRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard2
                title={'Incomes'}
                amount={'$2600'}
                icons={<SouthWestRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard2
                title={'Expenses'}
                amount={'$1000'}
                icons={<TurnSlightRightRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard2
                title={'Savings'}
                amount={'$800'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            rowSpacing={1}
            sx={{
              pt: CustomStyles.CONTAINER_TOP,
              pl: CustomStyles.CONTAINER_LEFT,
              pr: CustomStyles.CONTAINER_RIGHT,
            }}>
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
            <Grid item xs={12}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomHorizontalCard
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
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
      </Grid>
      <Grid sx={{ml: '13px'}}>
        <Footer currentOption={0} />
      </Grid>
    </Container>
  );
};
export default DashBoard;
