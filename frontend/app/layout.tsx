'use client';
import './globals.css';
import {Inter} from 'next/font/google';
import {ThemeProvider} from '@mui/material';
import defaultTheme from '@/core/layouts/DefaultTheme/defaultTheme';
import Head from 'next/head';
// @ts-ignore
import {SnackbarProvider} from 'notistack';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        <title>Budget pro</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
            {children}
          </SnackbarProvider>
        </ThemeProvider>
        {/*{children}*/}
      </body>
    </html>
  );
}
