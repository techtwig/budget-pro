// import Image from 'next/image'

import styles from './page.module.css';
import StartScreen from '@/component/StartScreen';
import {Box} from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main} style={{borderRadius: '50px'}}>
      <Box className={styles.description}>
        <StartScreen />
      </Box>
    </main>
  );
}
