import Head from 'next/head'
import { Suspense, lazy } from 'react';
import { Inter } from '@next/font/google'
import InitialLoadingPage from 'components/InitialLoadingPage'
import SignUp from 'components/SignUp'
import {Box} from "@mui/system";


const Navbar = lazy(() => import('components/Navbar'));
const MainBody = lazy(() => import('components/MainBody'));



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Feature Budget App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  
	   
		{/*<Suspense fallback={<InitialLoadingPage/>}>
				<Navbar/>
				<Box mr={8} ml={8}>
					<MainBody />
				</Box>
		</Suspense>*/}
		<SignUp />



    </>
  )
}
