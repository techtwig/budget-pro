'use client';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import {Container} from '@mui/material';
import {useRouter} from 'next/navigation';

const StartScreen = () => {
  const Router = useRouter();
  const handleRouting = (event: any) => {
    Router.push('/registration-login', {scroll: false});
    console.log('ecc', event);
  };
  return (
    <Container maxWidth={'xl'} disableGutters={true}>
      <Grid
        container
        spacing={0}
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
              width: '360px',
            }}>
            <CardMedia
              component='img'
              alt='green iguana'
              width='100%'
              image='/images/start-screen-1.png'
            />
            <CardContent
              sx={{
                background: '#FEFEFF',
                borderRadius: '10px',
                position: 'absolute',
                bottom: 0,
                height: '380px',
              }}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  See all of your money in one phone
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Add expense and income and see your statistics
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  fullWidth={true}
                  variant={'contained'}
                  size={'large'}
                  onClick={handleRouting}
                  sx={{borderRadius: '20px', backgroundColor: 'primary.dark'}}>
                  Start
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default StartScreen;
