import {Box, Grid, Typography,Paper,Avatar,TextField,Button} from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


const Login = () => {
const router = useRouter();
const paperStyle = {
	padding:'30px 20px',
	width: '300px',
	margin:' 50px auto'
	};
	
const buttonPosition = {
	marginTop: 20,
	textAlign: 'center'
};

const buttonStyle = {
	backgroundColor: '#108d85'
};

const fieldMargin = {
	marginTop: 5
};

const userSchema = yup.object().shape({
	userName: yup.string().required('Username is a required filed').min(7, 'Username must be at least 7 characters').max(10, 'Username can be at most 10 characters'),
	password: yup.string().required('Password is a required field').min(6, 'Password must be at least 6 charcaters'),
});

const {register, control, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(userSchema)});

const onSubmitHandler = async(userInfo: any) => {


 try {
    const response = await axios.post('http://localhost:5000/user/login', userInfo);
    const { accessToken } = response.data;
    Cookies.set('token', accessToken);
    const decodedUser = jwt.decode(accessToken);
	router.push('/');
  } catch (error) {
    console.error(error);

	}
	
	reset();
}

	return(
		<Box sx={{backgroundColor:'white', height: "100%", padding: '30px'}}>
			<Grid>
				<Paper elevation={10} style={paperStyle}>
					<Grid align='center'>
						<Avatar sx={{backgroundColor:'#108d85'}}>
							<CurrencyExchangeIcon/>
						</Avatar>
						<Typography variant='h4'>Login</Typography>
					</Grid>
					<form onSubmit={handleSubmit(onSubmitHandler)}>
						<TextField helperText={errors?.userName?.message?errors.userName.message:''} style={fieldMargin} variant='standard' label='UserName' fullWidth {...register('userName')}/>
						<TextField helperText={errors?.password?.message?errors.password.message:''} style={fieldMargin} type='password' variant='standard' label='Password' fullWidth {...register('password')}/>
						<Box style={buttonPosition}>
							<Button style={buttonStyle} type='submit' variant='contained'>Login</Button>
						</Box>
					</form>
				</Paper>
			</Grid>
		</Box>
	
	
	);

};

export default  Login;