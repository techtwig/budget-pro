'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import CustomCardDashboard from '@/common/CustomCardDashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InventoryIcon from '@mui/icons-material/Inventory';
import CustomCardDashboardTwo from '@/common/CustomCardDashboardTwo';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';
import TurnSlightRightRoundedIcon from '@mui/icons-material/TurnSlightRightRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import CustomBottomIcons from '@/common/CustomBottomIcons';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const DashBoard = () => {
  const handleClick = (e: any) => {
    console.log('clocked', e);
  };

  return (
    <Container maxWidth={'xs'}>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#FEFEFF',
        }}>
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
            <Grid item xs={12} sx={{mb: '10px'}}>
              <Box sx={{gap: '2'}}>
                <CustomCardDashboard
                  title={'Monobank'}
                  amount={'$1,250'}
                  icons={
                    <AccountBalanceIcon
                      sx={{color: '#fff', fontSize: '250%'}}
                    />
                  }
                />
                <CustomCardDashboard
                  title={'Revolut'}
                  amount={'$884.25'}
                  icons={
                    <FloodRoundedIcon sx={{color: '#fff', fontSize: '250%'}} />
                  }
                />
                <CustomCardDashboard
                  title={'PayPal'}
                  amount={'$320'}
                  icons={
                    <InventoryIcon sx={{color: '#fff', fontSize: '250%'}} />
                  }
                />
              </Box>
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
        <Grid item xs={12} sx={{display: 'flex'}}>
          <CustomBottomIcons
            icon={<HomeRoundedIcon sx={{color: '#7F7E80'}} />}
          />
          <CustomBottomIcons
            icon={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
          />
          <CustomBottomIcons icon={<AddSharpIcon sx={{color: '#7F7E80'}} />} />
          <CustomBottomIcons
            icon={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
          />
          <CustomBottomIcons
            icon={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default DashBoard;
