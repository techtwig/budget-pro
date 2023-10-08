import React, {useState} from 'react';
import {Box, Container, Grid} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {createTheme} from '@mui/material/styles';
import Signup from '@/component/SignUp';
import Login from '@/component/LogIn';

const SignupAndSignin = () => {
  const userSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required field'),
    password: yup
      .string()
      .required('Password is a required field')
      .min(6, 'Password must be at least 6 charcaters'),
  });

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const {
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver(userSchema)});
  // const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (active: number) => {
    setSelectedIndex(active);
    return;
  };

  return (
    <Container maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#FEFEFF',
          padding: '15px',
          pt: '50px',
          mt: '0px',
        }}>
        {/*<List component="nav" aria-label="main mailbox folders"
                      sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <ListItemButton
                        sx={{borderRadius: '20px', backgroundColor: '#FEFEFF', m: '3px', width: '40px'}}
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemText primary="SIGN UP" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                    <ListItemButton
                        sx={{borderRadius: '20px', backgroundColor: '#FEFEFF', width: '40px'}}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemText primary="LOG IN" sx={{textAlign: 'center'}}/>
                    </ListItemButton>
                </List>*/}

        <Grid container rowSpacing={6} columnSpacing={2}>
          <Grid item xs={6}>
            <CustomButton
              backGround={selectedIndex === 0 ? 'primary.main' : '#fff'}
              onClickBtn={() => handleListItemClick(0)}>
              SIGN UP
            </CustomButton>
          </Grid>
          <Grid item xs={6}>
            <CustomButton
              backGround={selectedIndex === 1 ? 'primary.main' : '#fff'}
              onClickBtn={() => handleListItemClick(1)}>
              LOG IN
            </CustomButton>
          </Grid>
          {selectedIndex === 0 && <Signup />}
          {selectedIndex === 1 && <Login />}
        </Grid>

        {/*{selectedIndex === 1 && <Login/>}*/}
      </Box>
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
