import {Box, Card, Typography} from '@mui/material';
import {FC} from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

interface Props {
  title: string;
  amount: number;
  icons?: any;
}
const DashboardCard: FC<Props> = ({title, amount}) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        background: '#fff',
        height: '125px',
        flexDirection: 'column',
        borderRadius: '10px',
        width: '125px',
        float: 'left',
        mb: '7px',
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
        {/*{icons}*/}
        <AccountBalanceIcon sx={{color: '#fff', fontSize: '250%'}} />
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
export default DashboardCard;
