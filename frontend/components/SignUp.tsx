import {Box, Grid, Typography,Paper,Avatar,TextField,Button} from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from "@mui/material/Link";
import React from "react";


const SignUp = () => {
const paperStyle = {
	padding:'30px 20px',
	width: 300,
	margin:'auto'
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
	name: yup.string().required('Name is a required field').min(8, 'Name must be at least 8 characters').max(13, 'Name can be at most 13 characters'),
	userName: yup.string().required('Username is a required filed').min(7, 'Username must be at least 7 characters').max(10, 'Username can be at most 10 characters'),
	email: yup.string().email('Please enter a valid email').required('Email is required field'),
	password: yup.string().required('Password is a required field').min(6, 'Password must be at least 6 charcaters'),
	confirmPassword: yup.string().required('Confirm password is a required field').oneOf([yup.ref('password'), null], 'Mismatch with given password')
});

const {register, control, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(userSchema)});
const router = useRouter();
const onSubmitHandler = async(userInfo: any) => {

delete userInfo.confirmPassword;
console.log(userInfo);
try{
	await axios({
		method: 'post',
		url: 'http://localhost:5000/user',
		data: userInfo
	});
	
}catch(e){
console.log(e);
}
router.push('/login');
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
						<Typography variant='h4'>SignUp</Typography>
						<Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
					</Grid>
					<form onSubmit={handleSubmit(onSubmitHandler)}>
						<TextField helperText={errors?.name?.message?errors.name.message:''} variant='standard' label='Name' fullWidth {...register('name')}/>
						<TextField helperText={errors?.userName?.message?errors.userName.message:''} style={fieldMargin} variant='standard' label='UserName' fullWidth {...register('userName')}/>
						<TextField helperText={errors?.email?.message?errors.email.message:''} style={fieldMargin} variant='standard' label='Email' fullWidth {...register('email')}/>
						<TextField helperText={errors?.password?.message?errors.password.message:''} style={fieldMargin} type='password' variant='standard' label='Password' fullWidth {...register('password')}/>
						<TextField helperText={errors?.confirmPassword?.message?errors.confirmPassword.message:''} style={fieldMargin} type='password' variant='standard' label='Confirm Password' fullWidth {...register('confirmPassword')}/>
						<Box style={buttonPosition}>
							<Button style={buttonStyle} type='submit' variant='contained'>Sign Up</Button>
						</Box>
					</form>
					<Box mt={2} display='flex' alignItems='center' justifyContent='center'>
						<Typography variant='caption' gutterBottom fontSize='15px'>Already have an account?
							<Link href='/login' underline='none'>
								Login
							</Link>
						</Typography>
					</Box>
				</Paper>
			</Grid>
		</Box>
	
	
	);

};

export default SignUp;