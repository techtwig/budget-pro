import {Box, Paper, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
  title?: string;
  amount?: string;
  icons?: any;
  onClickBtn?: any;
}
const CustomCardMyWallet: FC<Props> = ({title, icons, onClickBtn}) => {
  return (
    <Paper
      elevation={0}
      onClick={onClickBtn}
      sx={{
        background: '#fff',
        flexDirection: 'column',
        borderRadius: '20px',
        border: '2px solid #F0EEEF',
        p: '10px',
        cursor: 'pointer',
      }}>
      <Box
        sx={{
          height: '45px',
          width: '45px',
          backgroundColor: '#ADABAD',
          borderRadius: '14px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          m: '10px',
        }}>
        {icons}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '15px',
            mb: '5px',
            ml: '10px',
            mt: '1px',
            fontWeight: '700',
            width: '60%',
          }}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
};
export default CustomCardMyWallet;
