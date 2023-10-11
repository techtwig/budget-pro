'use client';
import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CustomHorizontalCard from '@/common/CustomHorizontalCard';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {timeDuration} from '@/common/ListedData';
import React, {useState} from 'react';
import CustomButtonText from '@/common/addTransaction/CustomButtonText';
import {useRouter} from 'next/navigation';

const RevolutWalletPage = () => {
  const Router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };

  const handleBack = () => {
    return Router.back();
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF'}}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            mt: '36px',
          }}>
          <Button
            sx={{p: '0px 0px', display: 'flex', justifyContent: 'initial'}}
            onClick={handleBack}>
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

        <Grid item xs={6} sx={{mt: '12px'}}>
          <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
            Revolut Wallet
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{mt: '10px'}}>
          <TextField
            sx={{width: '95%'}}
            id='currency'
            select
            defaultValue='1'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
                fontSize: '14px',
                fontWeight: '600',
                opacity: '.6',
              },
              style: {
                height: '37px',
              },
            }}>
            {timeDuration.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mt: '26px'}}>
          <Grid
            container
            spacing={0}
            sx={{
              width: '100%',
              backgroundColor: '#FAF9FA',
            }}>
            <Grid item xs={2.5}>
              <CustomButtonText
                backGround={selectedIndex === 3 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(3)}>
                All
              </CustomButtonText>
            </Grid>
            <Grid item xs={3.5}>
              <CustomButtonText
                backGround={selectedIndex === 0 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(0)}>
                Expenses
              </CustomButtonText>
            </Grid>
            <Grid item xs={3}>
              <CustomButtonText
                backGround={selectedIndex === 1 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(1)}>
                Incomes
              </CustomButtonText>
            </Grid>
            <Grid item xs={3}>
              <CustomButtonText
                backGround={selectedIndex === 2 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(2)}>
                Savings
              </CustomButtonText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{mt: '26px'}}>
          <Typography sx={{fontSize: '14px', fontWeight: '700', opacity: '.4'}}>
            Today
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Cafe kitsune'}
            subTitle={'Restaurent'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'+$1000'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            subTitle={'Transport'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$5000'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Upwork'}
            subTitle={'Incomes freelanches'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$100.00'}
          />
        </Grid>
        <Grid item xs={12} sx={{mr: '12px', mt: '16px'}}>
          <Typography sx={{fontSize: '14px', fontWeight: '700', opacity: '.4'}}>
            20 July, 2030
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Amazon'}
            subTitle={'Technologies'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$130.90'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Medical center'}
            subTitle={'Health'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$6'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomHorizontalCard
            title={'Uber'}
            subTitle={'Transport'}
            icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
            amount={'-$254.66'}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default RevolutWalletPage;
