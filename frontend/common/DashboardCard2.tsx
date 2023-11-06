import {Box, Paper, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
  title: string;
  amount: string;
  icons?: any;
}
const DashboardCard2: FC<Props> = ({title, amount, icons}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: '#fff',
        height: '140px',
        flexDirection: 'column',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
      }}>
      <Box
        sx={{
          height: '36px',
          width: '36px',
          backgroundColor: '#EBE9ED',
          m: '13px',
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons}
      </Box>
      <Box>
        <Typography sx={{fontSize: '30px', ml: '10px', fontWeight: '700'}}>
          {amount}
        </Typography>
        <Typography
          sx={{
            fontSize: '15px',
            mb: '5px',
            ml: '10px',
            mt: '1px',
            fontWeight: '700',
          }}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};
export default DashboardCard2;
