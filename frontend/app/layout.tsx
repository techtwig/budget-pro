'use client';
import './globals.css';
import {Inter} from 'next/font/google';
import {SnackbarProvider} from 'notistack';
import {ThemeProvider} from '@mui/material';
import defaultTheme from '@/core/layouts/DefaultTheme/defaultTheme';
import Head from 'next/head';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <html lang='en'>
        <Head>
          <title>Budget pro</title>
          <meta property='og:title' content='My page title' key='title' />
        </Head>
        <body className={inter.className}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
            {children}
          </SnackbarProvider>
          {/*{children}*/}
        </body>
      </html>
    </ThemeProvider>
  );
}
