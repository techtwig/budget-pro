'use client';
import {Container, Divider, Grid, Typography} from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded';
import TurnSlightRightRoundedIcon from '@mui/icons-material/TurnSlightRightRounded';
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import CustomCardMyWallet from '@/common/CustomMyWalletCart';
import CustomCardMyWallet2 from '@/common/CustomCardMyWallet2';
import Footer from '@/common/footer/Footer';

const MyWalletComponent = () => {
  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF', pt: '40px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{}}>
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
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>

            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
              />
            </Grid>
            <Grid item xs={12} sx={{mr: '12px'}}>
              <CustomCardMyWallet2
                title={'Burger'}
                subTitle={'Food'}
                icons={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                icons2={<ArrowDownwardRoundedIcon sx={{color: '#7F7E80'}} />}
                amount={'$1000'}
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
                  <RadarRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px splid #EFEDEE',
                      m: '10px',
                      fontSize: '250%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Create new wallet'}
                icons={
                  <SouthWestRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px splid #EFEDEE',
                      m: '10px',
                      fontSize: '250%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Connect an e-wallet'}
                icons={
                  <TurnSlightRightRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px splid #EFEDEE',
                      m: '10px',
                      fontSize: '250%',
                    }}
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCardMyWallet
                title={'Add a crypto wallet'}
                icons={
                  <ArrowDownwardRoundedIcon
                    sx={{
                      color: '#7F7E80',
                      backgroundColor: '#ACAAAC',
                      borderRadius: '10px',
                      border: '2px splid #EFEDEE',
                      m: '10px',
                      fontSize: '250%',
                    }}
                  />
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Footer currentOption={3} />
      </Grid>
    </Container>
  );
};
export default MyWalletComponent;
