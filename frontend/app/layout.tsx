'use client';

import './globals.css';
import {Inter} from 'next/font/google';
import {responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import defaultTheme from '@/core/layouts/DefaultTheme/defaultTheme';
import Head from 'next/head';

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
          <ThemeProvider theme={responsiveFontSizes(defaultTheme)}>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
