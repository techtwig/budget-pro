'use client';
import {Button, Container, Grid, Typography} from '@mui/material';
import Footer from '@/common/footer/Footer';
import React, {useEffect, useState} from 'react';
import CustomCardForSetting from '@/common/CustomCardForSettings';
import {CustomStyles} from '@/utilities/enums';
import {useRouter} from 'next/navigation';

const Settings = () => {
  const [setting, setSetting] = useState<number>(0);
  const Router = useRouter();
  const habdleClick = (index: number) => {
    console.log('already clicked');
    setSetting(index);
  };
  useEffect(() => {
    if (setting === 5) {
      Router.push('/settings/terms-and-support', {scroll: false});
    } else if (setting === 2) {
      Router.push('/settings/notification', {scroll: false});
    } else if (setting === 6) {
      Router.push('/settings/contact-support', {scroll: false});
    }
  }, [setting]);
  console.log('val', setting);
  return (
    <Container
      maxWidth={'xs'}
      disableGutters={true}
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FAF8FE',
        pt: CustomStyles.CONTAINER_TOP,
        pl: CustomStyles.CONTAINER_LEFT,
        pr: CustomStyles.CONTAINER_RIGHT,
        pb: '100px',
        position: 'relative',
      }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
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
            <CustomCardForSetting
              title={'Notification'}
              subTitle={'USD'}
              onClk={() => habdleClick(2)}
            />
            <CustomCardForSetting title={'Main currency'} subTitle={'TK'} />
            <CustomCardForSetting title={'Language'} />
            <CustomCardForSetting title={'Export'} />
            <CustomCardForSetting
              title={'Terms and Support'}
              onClk={() => habdleClick(5)}
            />
            <CustomCardForSetting
              title={'Contract support'}
              onClk={() => habdleClick(6)}
            />
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
      </Grid>
      <Footer currentOption={4} />
    </Container>
  );
};
export default Settings;
