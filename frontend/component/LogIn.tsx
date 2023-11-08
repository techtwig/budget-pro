import React, {useState} from 'react';
import * as yup from 'yup';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import {useRouter} from 'next/navigation';
import SubmitButton from '@/common/button/SubmitButton';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import useNotiStack from '@/hooks/NotiStack';

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

const Login = () => {
  const [isUserExist, setIsUserExist] = useState<boolean>(false);

  const Router = useRouter();
  const {successStack, errorStack} = useNotiStack();
  const {
    handleSubmit,
    reset,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(userSchema)});
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleLogin = async (data: any) => {
    console.log('data', data);
    try {
      const response = await axios.post(
        'http://localhost:5000/user/login',
        data,
      );

      console.log('Response:', response.data);
      if (response && response.data.status === 500) {
        successStack(`response.data.message`);
      }
      if (response && response.data.status === 200) {
        setIsUserExist(false);
        successStack('Login Successful');
        reset();

        return Router.push('/dashboard', {scroll: false});
      }
    } catch (error: any) {
      console.error('Error:', error);
      errorStack(error?.response?.data.message);
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography
          component='h1'
          variant='h5'
          sx={{mb: '0px', textAlign: 'center', fontWeight: '700'}}>
          LOG IN
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit(handleLogin)}>
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
                InputLabelProps={{style: {fontWeight: '600', opacity: '.5'}}}
              />
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
                InputLabelProps={{
                  style: {fontWeight: '600', opacity: '.5'},
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{fontSize: '12px', marginLeft: '8px', color: 'red'}}>
                {errors && errors.password && errors?.password.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{mt: '25px'}}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                OR LOG IN WITH:
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
              <SubmitButton>Login</SubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>

    // <ThemeProvider theme={defaultTheme}>
    //     <Container maxWidth="xs">
    //
    //         <CssBaseline/>
    //         <Box
    //             sx={{
    //                 marginTop: 8,
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //                 alignItems: 'center',
    //                 backgroundColor: '#FEFEFF',
    //                 padding:'15px',
    //                 pt: '30px',
    //                 mt:'0px'
    //
    //             }}
    //         >
    //             <Typography component="h1" variant="h5" sx={{mb:'20px'}} >
    //                 LOG IN
    //             </Typography>
    //             <form onSubmit={handleSubmit(onSubmitHandler)}>
    //                 <Grid container spacing={5}  sx={{float:'bottom'}}>
    //                     <Grid item xs={12}>
    //                         <TextField
    //
    //                             required
    //                             fullWidth
    //                             id="email"
    //                             label="Email Address"
    //                             name="email"
    //                             autoComplete="email"
    //                             variant="outlined"
    //                             InputProps={{
    //                                 style: {
    //                                     borderRadius: "30px",
    //                                     backgroundColor: "#F8F7F8"
    //                                 }
    //                             }}
    //                         />
    //                     </Grid>
    //                     <Grid item xs={12}>
    //                         <TextField
    //
    //                             required
    //                             fullWidth
    //                             name="password"
    //                             label="Password"
    //                             id="password"
    //                             autoComplete="new-password"
    //                             variant="outlined"
    //                             type={showPassword ? "text" : "password"} // <-- This is where the magic happens
    //
    //                             InputProps={{
    //                                 style: {
    //                                     borderRadius: "30px",
    //                                     backgroundColor: "#F8F7F8"
    //                                 },
    //                                 endAdornment: (
    //                                     <InputAdornment position="end">
    //                                         <IconButton
    //                                             aria-label="toggle password visibility"
    //                                             onClick={handleClickShowPassword}
    //                                             onMouseDown={handleMouseDownPassword}
    //                                         >
    //                                             {showPassword ? <Visibility /> : <VisibilityOff />}
    //                                         </IconButton>
    //                                     </InputAdornment>
    //                                 )
    //                             }}
    //                         />
    //                     </Grid>
    //
    //                 </Grid>
    //                 <Button
    //                     type="submit"
    //                     fullWidth
    //                     variant="contained"
    //                     sx={{mt: 3, mb: 2, borderRadius:'15px', backgroundColor: 'black', height: '50px'}}
    //                 >
    //                     Log in
    //                 </Button>
    //             </form>
    //
    //         </Box>
    //     </Container>
    // </ThemeProvider>
  );
};
export default Login;
