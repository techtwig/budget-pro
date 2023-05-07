//import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../../hoc/Layout'
import {useEffect,useState } from 'react';
import InitialLoadingPage from 'components/InitialLoadingPage';
import SignUp from 'components/SignUp';

export default function App({ Component, pageProps }: AppProps) {
const [isLoading,setIsLoading]=useState<boolean>(true);


	useEffect(()=>{
	setTimeout(()=>{setIsLoading(false)},1000)
	},[])
	
	if (Component.getLayout){
		return isLoading?<InitialLoadingPage />:Component.getLayout(<Component {...pageProps} />)
		
	}
	
  return (
    <>
	  {
	  isLoading?<InitialLoadingPage />
	  :<Layout><Component {...pageProps} /></Layout>  
	  }
    </>
	
  )
  
  
}

