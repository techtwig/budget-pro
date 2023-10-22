'use client';
import {Container, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import React from 'react';
import BackButton from '@/common/button/BackButton';
import {CustomStyles} from '@/utilities/enums';

const EatingOutPage = () => {
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BackButton />
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
