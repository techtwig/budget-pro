'use client';
import {Container, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CustomCardMyWallet from '@/common/CustomMyWalletCart';
import CustomCardMyWallet2 from '@/common/CustomCardMyWallet2';
import Footer from '@/common/footer/Footer';
import {CustomStyles} from '@/core/enums';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const MyWalletComponent = () => {
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
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '700',
              opacity: '.3',
            }}>
            Total Balance
          </Typography>
          <Typography sx={{fontSize: '30px', fontWeight: '700'}}>
            $2,600
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mt: '10px'}}>
          <Typography sx={{fontWeight: '700'}}>My wallets</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <CustomCardMyWallet2
                title={'Monobank account'}
                icons={
                  <AccountBalanceIcon
                    sx={{
                      color: '#fff',
                      fontSize: '200%',
                      border: '2px solid #EFEDEE',
                      borderRadius: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomCardMyWallet2
                title={'Revolut wallet'}
                icons={
                  <AccountBalanceWalletIcon
                    sx={{
                      color: '#fff',
                      fontSize: '200%',
                      border: '2px solid #EFEDEE',
                      borderRadius: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$325.88'}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomCardMyWallet2
                title={'PayPal wallet'}
                icons={
                  <AccountBalanceWalletIcon
                    sx={{
                      color: '#fff',
                      fontSize: '200%',
                      border: '2px solid #EFEDEE',
                      borderRadius: '10px',
                    }}
                  />
                }
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$110.70'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{mt: '16px'}}>
          <Typography sx={{fontWeight: '700'}}>Add New Wallet</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Add a bank account'}
                icons={
                  <AccountBalanceIcon
                    sx={{
                      color: '#fff',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px solid #EFEDEE',
                      m: '10px',
                      fontSize: '200%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Create new wallet'}
                icons={
                  <AccountBalanceWalletIcon
                    sx={{
                      color: '#fff',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px solid #EFEDEE',
                      m: '10px',
                      fontSize: '210%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Connect an e-wallet'}
                icons={
                  <AccountBalanceWalletIcon
                    sx={{
                      color: '#fff',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px solid #EFEDEE',
                      m: '10px',
                      fontSize: '200%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Add a crypto wallet'}
                icons={
                  <OtherHousesIcon
                    sx={{
                      color: '#fff',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px solid #EFEDEE',
                      m: '10px',
                      fontSize: '200%',
                    }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Footer currentOption={3} />
      </Grid>
    </Container>
  );
};
export default MyWalletComponent;
