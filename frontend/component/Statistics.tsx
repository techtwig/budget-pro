'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Footer from '@/common/footer/Footer';
import React from 'react';
import CustomCardForStatistics from '@/common/CustomCardStatistics';
import CustomBottomIcons from '@/common/CustomBottomIcons';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {timeDuration, wallets} from '@/common/ListedData';
import {BarChart} from '@/component/BarChart';

const Statistics = () => {
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Box>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
              Statistics
            </Typography>
            <Typography
              sx={{fontSize: '14px', fontWeight: '700', opacity: '.6'}}>
              Aug 1 - Aug 28, 2023
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
              <MenuItem key={option.title} value={option.title}>
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
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <BarChart />
        </Grid>
        <Grid item xs={12} sx={{mr: '16px'}}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: '25px',
              backgroundColor: '#E9E7E8',
              height: '50px',
              color: 'black',
            }}>
            DETAILED ANALYTICS
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
            Expenses category
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomCardForStatistics
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$5000'}
            percentage={'6%'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomCardForStatistics
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$5000'}
            percentage={'22%'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomCardForStatistics
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$500990'}
            percentage={'33%'}
          />
        </Grid>{' '}
        <Grid item xs={12}>
          <CustomCardForStatistics
            title={'Uber'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$50'}
            percentage={'1%'}
          />
        </Grid>
        <Footer currentOption={1} />
      </Grid>
    </Container>
  );
};
export default Statistics;
