import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../public/logo.png';
import budgetLogo from '../public/budgetLogo.svg';
import Link from "@mui/material/Link";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import {Avatar} from "@mui/material";
;


const Navbar = () => {
    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#108d85', padding: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* <Typography>Logo</Typography> */}
                    <Avatar sx={{backgroundColor:'#108d85'}}>
                        <CurrencyExchangeIcon sx={{fontSize:'2rem'}}/>
                    </Avatar>
                    <Typography variant='h5'
                                component='h1'
                                color={'#ffffff'}
                                sx={{fontFamily: 'Arial, sans-serif'}}
                                fontWeight={'700'}>
                        Budget App
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                        <Box>
                            <Link href='/login' underline='none' sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px'}}>
                                Login
                            </Link>
                        </Box>
                        <Box ml={1}>
                            <Link href='/signup' underline='none' sx={{fontFamily: 'Arial, sans-serif',variant:'body1', color:'white', fontWeight:'700', fontSize:'20px'}}>
                                Signup
                            </Link>
                        </Box>
                        <Box ml={1}>
                            {/*<Avatar sx={{width:'25px', height:'20px', backgroundColor:'#108d85', border: '2px solid #ccc',
                                borderRadius: '50%'}} alt='Farhad'>
                                F
                            </Avatar>*/}


                        </Box>
                    </Box>

                </Box>

            </AppBar>
        </div>
    );
};

export default Navbar;