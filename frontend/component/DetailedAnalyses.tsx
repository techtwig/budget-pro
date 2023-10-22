'use client';
import {
  Box,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import {CustomStyles} from '@/utilities/enums';
import CustomBottomIcons from '@/common/CustomBottomIcons';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import React from 'react';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import BackButton from '@/common/button/BackButton';
import PieChartComponent from '@/component/statisticsData/PieChart';
import {timeDuration, wallets} from '@/utilities/helper';

const DetailedAnalyses = () => {
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
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <BackButton />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Box>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
              Detailed Analyses
            </Typography>
          </Box>
          <Box>
            <CustomBottomIcons
              icon={
                <HomeRoundedIcon
                  sx={{
                    color: '#333333',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '2px solid #EDECED',
                    p: '3px',
                    fontSize: '200%',
                  }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={2}>
            <Grid item xs={6}>
              <TextField
                sx={{width: '100%'}}
                id='currency'
                select
                defaultValue='wallets'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                    height: '42px',
                  },
                }}>
                {wallets.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{width: '100%'}}
                id='currency'
                select
                defaultValue='2'
                InputProps={{
                  sx: {
                    borderRadius: '15px',
                    border: '2px solid #F4F2F3',
                    height: '42px',
                  },
                }}>
                {timeDuration.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <PieChartComponent />*/}
        {/*</Grid>*/}
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
            Transaction history
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
    </Container>
  );
};
export default DetailedAnalyses;
