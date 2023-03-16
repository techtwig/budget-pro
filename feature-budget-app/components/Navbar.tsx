import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../public/logo.png';
import budgetLogo from '../public/budgetLogo.svg';
;


const Navbar = () => {
    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#C8E6C9', padding: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* <Typography>Logo</Typography> */}
                    <Image
                        src={budgetLogo}
                        alt="Budget App Logo"
                        width={100}
                        height={35}
                    />
                    <Typography variant='h5'
                                component='h1'
                                color={'#212121'}
                                fontWeight={'700'}>
                        Budget App
                    </Typography>
                    <Typography variant='body1' color={'#212121'} fontWeight={'700'}>Profile</Typography>
                </Box>

            </AppBar>
        </div>
    );
};

export default Navbar;