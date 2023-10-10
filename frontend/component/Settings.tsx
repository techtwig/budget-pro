'use client';
import {Button, Container, Grid, Typography} from '@mui/material';
import Footer from '@/common/footer/Footer';
import React from 'react';
import CustomCardForSetting from '@/common/CustomCardForSettings';

const Settings = () => {
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
