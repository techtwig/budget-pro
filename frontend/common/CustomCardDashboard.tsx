import {Box, Card, Typography} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import {FC} from 'react';
interface Props {
  title: string;
  amount: string;
  icons?: any;
}
const CustomCardDashboard: FC<Props> = ({title, amount, icons}) => {
  return (
    <Card
      elevation={0}
      sx={{
        background: '#fff',
        height: '125px',
        flexDirection: 'column',
        borderRadius: '10px',
        width: '125px',
        float: 'left',
        m: '10px',
      }}>
      <Box
        sx={{
          height: '50px',
          width: '50px',
          backgroundColor: '#A7A7B6',
          mt: '10px',
          ml: '10px',
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
          }}>
          {title}
        </Typography>
        <Typography sx={{fontSize: '20px', ml: '10px', fontWeight: '700'}}>
          {amount}
        </Typography>
      </Box>
    </Card>
  );
};
export default CustomCardDashboard;
