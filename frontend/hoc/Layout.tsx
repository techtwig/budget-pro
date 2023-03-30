import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import {ThemeProvider,responsiveFontSizes,} from '@mui/material/styles' 
import { createTheme } from '@mui/material/styles';
import {palette} from '../customTheme/palette'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import theme from "../customTheme/theme";
const inter = Inter({ subsets: ['latin'] })



const Layout=({ children }: any)=> {
  return (
	<ThemeProvider theme={theme()}>
	 <Head>
        <title>Feature Budget App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box sx={{mt:6}}>{children}</Box>
	</ThemeProvider>
  )
}
export default Layout;