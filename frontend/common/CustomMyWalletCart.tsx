import {Box, Paper, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
  title?: string;
  amount?: string;
  icons?: any;
}
const CustomCardMyWallet: FC<Props> = ({title, icons}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: '#fff',
        flexDirection: 'column',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
        width: '180px',
      }}>
      <Box>{icons}</Box>
      <Box>
        <Typography
          sx={{
            fontSize: '15px',
            mb: '5px',
            ml: '10px',
            mt: '1px',
            fontWeight: '700',
            width: '70%',
          }}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};
export default CustomCardMyWallet;
