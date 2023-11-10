'use client';
import {Inter} from 'next/font/google';
import ThemeRegistry from '@/core/layouts/ThemeRegistry';
import Head from 'next/head';
import {SnackbarProvider} from 'notistack';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <Head>
        <title>Budget pro</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <html lang='en'>
        <body className={inter.className} style={{background: '#ebebeb'}}>
          <GoogleOAuthProvider
            clientId={
              '690063727023-jvbaff4i02iqv5hhgvjlj6rr8f07m492.apps.googleusercontent.com'
            }>
            <ThemeRegistry options={{ key: 'mui' }}>
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                  <ProgressBar
                    height="40px"
                    color="#000"
                    options={{ showSpinner: false }}
                    shallowRouting
                  />
                {children}
              </SnackbarProvider>
            </ThemeRegistry>
          </GoogleOAuthProvider>
        </body>
      </html>
    </html>
  );
}
