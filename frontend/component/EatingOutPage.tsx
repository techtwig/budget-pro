'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
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
import Footer from '@/common/footer/Footer';
import CustomCardMyWallet2 from '@/common/CustomCardMyWallet2';
import CustomCardMyWallet from '@/common/CustomMyWalletCart';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EatingOutPage = () => {
  const handleClick = (e: any) => {
    console.log('clocked', e);
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF'}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            mt: '36px',
          }}>
          <Button
            sx={{p: '0px 0px', display: 'flex', justifyContent: 'initial'}}>
            <KeyboardBackspaceIcon
              sx={{
                color: '#403F40',
                backgroundColor: '#fff',
                borderRadius: '8px',
                fontSize: '240%',
                border: '2px solid #EEEDEE',
                p: '3px',
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '18px', fontWeight: '700'}}>
            Eating Out
          </Typography>
          <Typography sx={{fontSize: '14px', fontWeight: '700', opacity: '.6'}}>
            Aug 1 - Aug 28, 2023
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$5000'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$5000'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$500990'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$50'}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default EatingOutPage;
