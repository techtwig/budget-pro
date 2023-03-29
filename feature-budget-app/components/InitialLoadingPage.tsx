import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import budgetLogo from '../public/budgetLogo.svg';

const InitialLoadingPage = () => {
	return(
		<Box
			style={{
			backgroundColor:'white',
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh"
      }}>
			<Grid container>
				<Grid item xs={12} md={12}>
					<Box sx={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
						<Box sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
							<Typography variant='h2'
                                component='h1'
                                color={'#212121'}
                                fontWeight={'700'}>
								Budget App
							</Typography>
							<Image
								src={budgetLogo}
								alt="Budget App Logo"
								width={100}
								height={50}
							/>
						</Box>
						<Typography variant='h6'
                                component='h2'
                                color={'#212121'}
                                fontWeight={'700'}>
								make budgeting a habit
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	
	);
};

export default InitialLoadingPage;