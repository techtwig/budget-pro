import React, {useState} from 'react';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
// @ts-ignore
import FacebookLogin from 'react-facebook-login';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import SubmitButton from '@/common/button/SubmitButton';
import useNotiStack from '@/hooks/useNotifyStack';
import {useGoogleLogin} from '@react-oauth/google';
import {useRouter} from 'next/navigation';

const PREFIX = 'facebook-style';

const classes = {
  facebookBackground: `${PREFIX}-background`,
  bannerImage: `${PREFIX}-image`,
};
const Signup = ({setSelectedIndex}: any) => {
  const {successStack} = useNotiStack();
  const [isUserExist, setIsUserExist] = useState<boolean>(false);
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

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver(userSchema)});
  const onSubmitHandler = async (data: any) => {
    console.log('data-->', data);
    try {
      const response = await axios.post(
        'http://localhost:5000/user/signup',
        data,
      );
      console.log('Response:', response.data);
      if (response && response.data.status === 500) {
        setIsUserExist(true);
      }
      if (response && response.data.status === 201) {
        setIsUserExist(false);
        successStack('Registration Successful');
        //setSelectedIndex(1);
        reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<any>(null);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const responseFacebook = (response: any) => {
    console.log(response);
  };

  const loginViaGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setUser(codeResponse);
      console.log('response-->', codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  const validateToken = async (data: any) => {
    try {
      console.log('entry');
      const response = await axios.post(
        'http://localhost:5000/social-auth/google',
        data,
      );

      // Handle the success response from the backend
      if (response.status === 200) {
        console.log(response);
      } else {
        console.log('jdfks');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log('userInfo-->', user);
  if (user) {
    validateToken(user);
    router.push('/dashboard');
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography
          component='h1'
          variant='h5'
          sx={{mb: '0px', textAlign: 'center', fontWeight: '700'}}>
          SIGN UP
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid item xs={12}>
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                {...register('email')}
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
                variant='outlined'
                InputProps={{
                  sx: {
                    borderRadius: '25px',
                    backgroundColor: '#FAF9F9',

                    '& fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input:hover + fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input:focus + fieldset': {
                      border: 'none',
                      opacity: '1',
                    },
                  },
                }}
                InputLabelProps={{style: {fontWeight: '700', opacity: '.5'}}}
              />
              <Grid item xs={12}>
                <Typography
                  sx={{fontSize: '12px', marginLeft: '8px', color: 'red'}}>
                  {isUserExist
                    ? 'This email already exist'
                    : errors && errors.email && errors?.email.message}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register('password')}
                fullWidth
                id='password'
                label='Password'
                name='password'
                autoComplete='password'
                variant='outlined'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  sx: {
                    borderRadius: '25px',
                    backgroundColor: '#FAF9F9',

                    '& fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input:hover + fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input:focus + fieldset': {
                      border: 'none',
                    },
                  },
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{style: {fontWeight: '700', opacity: '.5'}}}
              />
              <Grid item xs={12}>
                <Typography
                  sx={{fontSize: '12px', marginLeft: '8px', color: 'red'}}>
                  {errors && errors.password && errors?.password.message}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{mt: '25px'}}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                OR SIGN UP WITH:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <Box
                    sx={{
                      height: '70px',
                      width: '70px',
                      backgroundColor: '#FAF9F9',
                      borderRadius: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}>
                    <AppleIcon
                      sx={{height: '45px', width: '45px', color: '#121111'}}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <Box
                    sx={{
                      height: '70px',
                      width: '70px',
                      backgroundColor: '#FAF9F9',
                      borderRadius: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}>
                    <FacebookRoundedIcon
                      sx={{height: '45px', width: '45px', color: '#696868'}}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                  <Box
                    onClick={() => loginViaGoogle()}
                    sx={{
                      height: '70px',
                      width: '70px',
                      backgroundColor: '#FAF9F9',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}>
                    <GoogleIcon
                      sx={{height: '45px', width: '45px', color: '#7D7C7C'}}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Create Account</SubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default Signup;
