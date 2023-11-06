'use client';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import {useRouter} from 'next/navigation';
import SubmitButton from '@/common/button/SubmitButton';

const StartScreen = () => {
  const Router = useRouter();
  const handleRouting = (event: any) => {
    Router.push('/registration-login', {scroll: false});
    console.log('ecc', event);
  };
  return (
    <Container
      maxWidth={'xl'}
      sx={{mr: '-10px', ml: '-10px', position: 'relative'}}>
      <Grid
        container
        rowSpacing={2}
        direction='column'
        alignItems='center'
        justifyContent='center'>
        <Grid item xs={12} md={5}>
          <Card
            elevation={0}
            sx={{
              background: '#fff',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              position: 'relative',
              width: '444px',
            }}>
            <CardMedia
              component='img'
              alt='green iguana'
              width='100%'
              image='/images/start-screen-1.png'
            />
            <CardContent
              sx={{
                background: '#FAF8FE',
                borderRadius: '20px',
                position: 'fiexd',
                bottom: '0px',
                height: '500px',
              }}>
              <CardContent>
                <Typography
                  sx={{fontWeight: '700', p: '0px 40px'}}
                  gutterBottom
                  variant='h5'
                  component='div'>
                  See all of your money in one phone
                </Typography>
                <Typography
                  sx={{fontWeight: '500', p: '0px 40px'}}
                  component='div'>
                  Add expense and income and see your statistics
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <SubmitButton onClickBtn={handleRouting}>START</SubmitButton>
      </Grid>
    </Container>
  );
};
export default StartScreen;
