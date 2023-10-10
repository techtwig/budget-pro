'use client';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Footer from '@/common/footer/Footer';
import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CustomCardForStatistics from '@/common/CustomCardStatistics';
import CustomBottomIcons from '@/common/CustomBottomIcons';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {timeDuration, wallets} from '@/common/ListedData';
import CustomCardMyWallet2 from '@/common/CustomCardMyWallet2';
import CustomCardForSetting from '@/common/CustomCardForSettings';
import Drawers from '@/component/DrewerComponent';

const Settings = () => {
  const handleClick = (e: any) => {
    console.log('clocked', e);
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '102vh', backgroundColor: '#FAF8FE'}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            mt: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography sx={{fontSize: '22px', fontWeight: '700'}}>
            Settings
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            sx={{
              display: 'flex',
              background: '#fff',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: '10px',
              borderRadius: '40px',
            }}>
            <CustomCardForSetting title={'Premium'} />
            <CustomCardForSetting title={'Notification'} subTitle={'USD'} />
            <CustomCardForSetting title={'Main currency'} subTitle={'TK'} />
            <CustomCardForSetting title={'Language'} />
            <CustomCardForSetting title={'Export'} />
            <CustomCardForSetting title={'Terms and policies'} />
            <CustomCardForSetting title={'Contract support'} />
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: '#000',
            fontSize: '20px',
            mt: '40px',
          }}>
          <Button
            sx={{
              color: '#000',
              fontSize: '15px',
              fontWeight: '700',
            }}>
            Log Out
          </Button>
        </Grid>
        <Footer currentOption={4} />
      </Grid>
    </Container>
  );
};
export default Settings;
