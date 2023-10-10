'use client';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CustomBottomIcons from '@/common/CustomBottomIcons';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, {useState} from 'react';
import CustomCardHorizonatlIconAndTitle from '@/common/addTransaction/CustomCardHorizontalIconAndTiTle';
import CustomButtonIcon1 from '@/common/addTransaction/CustomButtonWithIcon';
import CustomButtonText from '@/common/addTransaction/CustomButtonText';
import {useRouter} from 'next/navigation';

const AddTransaction = () => {
  const Router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleWalletClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const handleWalletClick1 = (active: number) => {
    setSelectedIndex1(active);
    return;
  };
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const handleWalletClick2 = (active: number) => {
    setSelectedIndex2(active);
    return;
  };

  const handleBack = () => {
    return Router.back();
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF', pt: '40px'}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'self-start',
          }}>
          <Button onClick={handleBack}>
            <KeyboardBackspaceIcon
              sx={{
                color: '#B1AFB1',
                backgroundColor: '#fff',
                borderRadius: '8px',
                p: '5px',
                fontSize: '230%',
                mt: '12px',
                border: '2px solid #B1AFB1',
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '24px', fontWeight: '700'}}>
            Add Transaction
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mr: '16px'}}>
          <Grid
            container
            sx={{
              width: '100%',
              backgroundColor: '#FAF9FA',
            }}>
            <Grid item xs={4}>
              <CustomButtonText
                backGround={selectedIndex === 0 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(0)}>
                Expenses
              </CustomButtonText>
            </Grid>
            <Grid item xs={4}>
              <CustomButtonText
                backGround={selectedIndex === 1 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(1)}>
                Incomes
              </CustomButtonText>
            </Grid>
            <Grid item xs={4}>
              <CustomButtonText
                backGround={selectedIndex === 2 ? '#E7E6E6' : '#FAF9FA'}
                onClickBtn={() => handleWalletClick(2)}>
                Savings
              </CustomButtonText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{mr: '16px'}}>
          <Grid
            container
            spacing={0}
            sx={{
              width: '100%',
              backgroundColor: '#FBF8F9',
              p: '10px',
              borderRadius: '25px',
            }}>
            <Grid item xs={6}>
              <Box sx={{textAlign: 'left', p: '6px', fontWeight: '700'}}>
                200
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                alignItems: 'right',
                justifyContent: 'end',
                pr: '5px',
              }}>
              <Box sx={{opacity: '.7', textAlign: 'right', p: '6px'}}>USD</Box>
              <Box>
                <CustomBottomIcons
                  icon={
                    <HomeRoundedIcon
                      sx={{
                        color: '#333333',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: '2px solid #EDECED',
                        p: '5px',
                        fontSize: '200%',
                      }}
                    />
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'left',
              fontWeight: '700',
            }}>
            Wallet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={4}>
                  <CustomButtonIcon1
                    backGround={selectedIndex1 === 0 ? '#E7E6E6' : '#FAF9FA'}
                    icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                    onClickBtn={() => handleWalletClick1(0)}>
                    Mono Bank
                  </CustomButtonIcon1>
                </Grid>
                <Grid item xs={4}>
                  <CustomButtonIcon1
                    backGround={selectedIndex1 === 1 ? '#E7E6E6' : '#FAF9FA'}
                    icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                    onClickBtn={() => handleWalletClick1(1)}>
                    Revolut
                  </CustomButtonIcon1>
                </Grid>

                <Grid item xs={4}>
                  <CustomButtonIcon1
                    backGround={selectedIndex1 === 2 ? '#E7E6E6' : '#FAF9FA'}
                    icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                    onClickBtn={() => handleWalletClick1(2)}>
                    PayPal
                  </CustomButtonIcon1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'left',
              fontWeight: '700',
            }}>
            Expenses Categories
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            border: '2px solid #F0EFF0',
            borderRadius: '30px',
            m: '15px',
          }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomCardHorizonatlIconAndTitle
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#333333',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      border: '2px solid #393939',
                      p: '5px',
                      fontSize: '230%',
                    }}
                  />
                }>
                <Box sx={{fontSize: '12px', fontWeight: '700'}}>Add New</Box>
              </CustomCardHorizonatlIconAndTitle>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomCardHorizonatlIconAndTitle
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#B1AFB1',
                      backgroundColor: '#F2F1F1',
                      borderRadius: '8px',
                      p: '5px',
                      fontSize: '230%',
                    }}
                  />
                }>
                <Box sx={{fontSize: '12px', fontWeight: '700'}}>Food</Box>
              </CustomCardHorizonatlIconAndTitle>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomCardHorizonatlIconAndTitle
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#B1AFB1',
                      backgroundColor: '#F2F1F1',
                      borderRadius: '8px',
                      p: '5px',
                      fontSize: '230%',
                    }}
                  />
                }>
                <Box sx={{fontSize: '12px', fontWeight: '700'}}>Transport</Box>
              </CustomCardHorizonatlIconAndTitle>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomCardHorizonatlIconAndTitle
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#B1AFB1',
                      backgroundColor: '#F2F1F1',
                      borderRadius: '8px',
                      p: '5px',
                      fontSize: '230%',
                    }}
                  />
                }>
                <Box sx={{fontSize: '12px', fontWeight: '700'}}>Eating Out</Box>
              </CustomCardHorizonatlIconAndTitle>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <CustomCardHorizonatlIconAndTitle
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#B1AFB1',
                      backgroundColor: '#F2F1F1',
                      borderRadius: '8px',
                      p: '5px',
                      fontSize: '230%',
                    }}
                  />
                }>
                <Box sx={{fontSize: '12px', fontWeight: '700'}}>Cloths</Box>
              </CustomCardHorizonatlIconAndTitle>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <CustomButtonText
                backGround={selectedIndex2 === 0 ? '#E7E6E6' : '#FAF9FA'}
                borderRadius={'20px'}
                onClickBtn={() => handleWalletClick2(0)}>
                Today
              </CustomButtonText>
            </Grid>
            <Grid item xs={4}>
              <CustomButtonText
                backGround={selectedIndex2 === 1 ? '#E7E6E6' : '#FAF9FA'}
                borderRadius={'20px'}
                onClickBtn={() => handleWalletClick2(1)}>
                Yestarday
              </CustomButtonText>
            </Grid>
            <Grid item xs={4}>
              <CustomBottomIcons
                icon={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#B1AFB1',
                      backgroundColor: '#fff',
                      borderRadius: '8px',
                      p: '5px',
                      fontSize: '230%',
                      mt: '12px',
                      border: '2px solid #B1AFB1',
                    }}
                  />
                }
              />
            </Grid>
          </Grid>
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
              backgroundColor: '#343333',
              height: '50px',
            }}>
            ADD TRANSACTION
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AddTransaction;
