'use client';

import './globals.css';
import {Inter} from 'next/font/google';
import {responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import defaultTheme from '@/core/layouts/DefaultTheme/defaultTheme';
import Head from 'next/head';
import {SnackbarProvider} from 'notistack';
import {GoogleOAuthProvider} from '@react-oauth/google';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Head>
        <title>Budget Pro</title>
        <meta name='Budget Pro' />
      </Head>
      <html lang='en'>
        <body className={inter.className}>
          <GoogleOAuthProvider
            clientId={
              '690063727023-jvbaff4i02iqv5hhgvjlj6rr8f07m492.apps.googleusercontent.com'
            }>
            <ThemeProvider theme={responsiveFontSizes(defaultTheme)}>
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                {children}
              </SnackbarProvider>
            </ThemeProvider>
          </GoogleOAuthProvider>
        </body>
      </html>
    </>
  );
}
