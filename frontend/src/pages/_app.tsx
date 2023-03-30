import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../../hoc/Layout'
import {useEffect,useState } from 'react';
import InitialLoadingPage from 'components/InitialLoadingPage'

export default function App({ Component, pageProps }: AppProps) {
const [isLoading,setIsLoading]=useState<boolean>(true);
console.log('hello from _app')

	useEffect(()=>{
	setTimeout(()=>{setIsLoading(false)},3000)
	},[])
  return (
    <>
	  {
	  isLoading?<InitialLoadingPage />
	  :<Layout><Component {...pageProps} /></Layout>
	  
	  }
    </>
	
  )
  
  
}

