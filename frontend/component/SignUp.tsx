import React, {useState} from 'react';
import {createTheme} from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// @ts-ignore
import FacebookLogin from 'react-facebook-login';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
const PREFIX = 'facebook-style';

const classes = {
  facebookBackground: `${PREFIX}-background`,
  bannerImage: `${PREFIX}-image`,
};

// const StyledCard = styled(Grid)(({theme}) => ({
//     borderRadius: '10px',
//     boxShadow: '0px 4px 24px 0px #0000001A',
//     '&:hover': {
//         boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//         [`& .${classes.bannerImage}`]: {
//             transition: 'box-shadow 0.3s',
//             filter: 'brightness(60%)',
//         },
//     },
//     [`& .${classes.facebookBackground}`]: {
//         position: 'relative',
//         width: '100%',
//         height: '151px',
//         backgroundColor: 'red'
//     },
//
// }));

const defaultTheme = createTheme();
const Signup = () => {
  console.log('hit at validation');
  const userSchema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your first name')
      .required('Firstname is required field'),
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
    handleSubmit,
    control,
    formState: {errors},
    reset,
  } = useForm({resolver: yupResolver(userSchema)});
  const onSubmitHandler = (event: any) => {
    console.log('hit before');
    event.preventDefault();
    console.log('hit');
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  console.log('error', errors);
  const responseFacebook = (response: any) => {
    console.log(response);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

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
      <Grid item xs={12}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
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
          </Grid>
          <Grid item xs={12}>
            <TextField
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
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '12px', opacity: '.5'}}>
              * It must contains 8-12 characters
            </Typography>
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
                  onClick={responseGoogle}
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
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  // return (
  //     <ThemeProvider theme={defaultTheme}>
  //             <Box
  //                 sx={{
  //                     marginTop: 8,
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                     alignItems: 'center',
  //                     backgroundColor: '#FEFEFF',
  //                     padding:'-15px',
  //                     pt: '30px',
  //                     mt:'0px'
  //
  //                 }}
  //             >
  //
  //                 <form onSubmit={handleSubmit(onSubmitHandler)}>
  //                     <Grid container rowSpacing={5} columnSpacing={2} sx={{float:'bottom'}}>
  //                         <Grid item xs={12}>
  //                             <Controller
  //                                 name="name"
  //                                 control={control}
  //                                 defaultValue=""
  //                                 render={({ field }) => (
  //                                     <TextField
  //                                         helperText={errors?.name?.message || ''}
  //                                         fullWidth
  //                                         {...field}
  //                                         required
  //                                         id="name"
  //                                         label=" Name"
  //                                         name="name" // Provide a name attribute
  //                                         autoComplete="name"
  //                                         variant="outlined"
  //                                         InputProps={{
  //                                             style: {
  //                                                 borderRadius: "30px",
  //                                                 backgroundColor: "#F8F7F8"
  //                                             }
  //                                         }}
  //                                     />
  //                                 )}
  //                             />
  //                         </Grid>
  //
  //                         <Grid item xs={12}>
  //                             <Controller
  //                                 name="email"
  //                                 control={control}
  //                                 defaultValue=""
  //                                 render={({ field }) => (
  //                                     <TextField
  //                                         helperText={errors?.email?.message || ''}
  //                                         fullWidth
  //                                         {...field}
  //                                         required
  //                                         id="email"
  //                                         label="Email"
  //                                         name="email" // Provide a name attribute
  //                                         autoComplete="email"
  //                                         variant="outlined"
  //                                         InputProps={{
  //                                             style: {
  //                                                 borderRadius: "30px",
  //                                                 backgroundColor: "#F8F7F8"
  //                                             }
  //                                         }}
  //                                     />
  //                                 )}
  //                             />
  //                         </Grid>
  //
  //                         <Grid item xs={12}>
  //                             <Controller
  //                                 name="password"
  //                                 control={control}
  //                                 defaultValue=""
  //                                 render={({ field }) => (
  //                                     <TextField
  //                                         helperText={errors?.password?.message || ''}
  //                                         fullWidth
  //                                         {...field}
  //                                         required
  //                                         id="password"
  //                                         label="Password"
  //                                         name="password" // Provide a name attribute
  //                                         autoComplete="password"
  //                                         variant="outlined"
  //                                         type={showPassword ? "text" : "password"}
  //                                         InputProps={{
  //                                             style: {
  //                                                 borderRadius: "30px",
  //                                                 backgroundColor: "#F8F7F8"
  //                                             },
  //                                             endAdornment: (
  //                                                 <InputAdornment position="end">
  //                                                     <IconButton
  //                                                         aria-label="toggle password visibility"
  //                                                         onClick={handleClickShowPassword}
  //                                                         onMouseDown={handleMouseDownPassword}
  //                                                     >
  //                                                         {showPassword ? <Visibility /> : <VisibilityOff />}
  //                                                     </IconButton>
  //                                                 </InputAdornment>
  //                                             )
  //                                         }}
  //                                     />
  //                                 )}
  //                             />
  //                         </Grid>
  //
  //
  //
  //
  //                         <Grid item xs={12}>
  //                             <Box sx={{textAlign: 'center', mb:'10px'}}>OR SIGNUP WITH:</Box>
  //                             <Grid container spacing={2}>
  //                                 <Grid item xs={4}  sx={{alignItems:'center', justifyContent: 'center',display: 'flex'}} >
  //                                     <AppleLogin
  //                                         clientId="com.react.apple.login"
  //                                         redirectURI="https://redirectUrl.com"
  //                                         render={(renderProps) => (
  //                                             <IconButton size="large" color="primary"  onClick={renderProps.onClick}>
  //                                         <AppleIcon />
  //                                     </IconButton>
  //
  //                                         )}
  //                                     />
  //
  //                                 </Grid>
  //                                 <Grid item xs={4}  sx={{alignItems:'center', justifyContent: 'center',display: 'flex'}}>
  //                                     <FacebookLogin
  //                                         appId="1088597931155576"
  //                                         autoLoad={false}
  //                                         fields="name,email,picture"
  //                                         callback={responseFacebook}
  //                                         cssClass='none'
  //                                         icon={ <IconButton  size="large" color="primary"  >
  //                                             <FacebookOutlinedIcon />
  //                                         </IconButton>}
  //                                         textButton={''}
  //                                     />
  //
  //                                     <IconButton  size="large" color="primary"  >
  //                                         <FacebookOutlinedIcon />
  //                                     </IconButton>
  //
  //                                 </Grid>
  //                                 <Grid item xs={4}  sx={{alignItems:'center', justifyContent: 'center',display: 'flex'}}>
  //                                     <GoogleLogin
  //                                         clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  //                                         buttonText=""
  //                                         onSuccess={responseGoogle}
  //                                         onFailure={responseGoogle}
  //                                         render={(renderProps) => (
  //
  //                                             <IconButton  size="large" color="primary"  onClick={renderProps.onClick}>
  //                                             <GoogleIcon />
  //                                             </IconButton>
  //
  //                                         )}
  //                                     />
  //                                 </Grid>
  //
  //                             </Grid>
  //
  //
  //
  //
  //                         </Grid>
  //                     </Grid>
  //                     <Button
  //                         type="submit"
  //                         fullWidth
  //                         variant="contained"
  //                         sx={{mt: 3, mb: 2, borderRadius:'15px', backgroundColor:'black', height: '50px'}}
  //                     >
  //                         Create Account
  //                     </Button>
  //                 </form>
  //
  //             </Box>
  //     </ThemeProvider>
  //
  // )
};
export default Signup;
