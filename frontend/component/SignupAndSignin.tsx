import React, {useState} from 'react';
import {Box, Container, Grid} from '@mui/material';
import Signup from '@/component/SignUp';
import Login from '@/component/LogIn';
import {CustomStyles} from '@/core/enums';

const SignupAndSignin = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };

  return (
    <Container
      maxWidth='xs'
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
      <Grid container rowSpacing={6} columnSpacing={2}>
        <Grid item xs={6}>
          <CustomButton
            backGround={selectedIndex === 0 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleListItemClick(0)}>
            SIGN UP
          </CustomButton>
        </Grid>
        <Grid item xs={6}>
          <CustomButton
            backGround={selectedIndex === 1 ? '#E7E6E6' : '#fff'}
            onClickBtn={() => handleListItemClick(1)}>
            LOG IN
          </CustomButton>
        </Grid>
        {selectedIndex === 0 && <Signup />}
        {selectedIndex === 1 && <Login />}
      </Grid>
    </Container>
  );
};
export default SignupAndSignin;

const CustomButton = ({children, onClickBtn, backGround}: any) => {
  return (
    <Box
      onClick={onClickBtn}
      sx={{
        backgroundColor: backGround,
        color: '#040303',
        padding: '15px 15px',
        borderRadius: '25px',
        textAlign: 'center',
        fontWeight: '700',
        cursor: 'pointer',
      }}>
      {children}
    </Box>
  );
};
