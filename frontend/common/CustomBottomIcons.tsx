import {Box, Card, Paper, Typography} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import {FC} from 'react';
interface Props {
  icon?: any;
}
const CustomBottomIcons: FC<Props> = ({icon}) => {
  return (
    <Box
      sx={{
        height: '36px',
        width: '36px',
        m: '18px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
      }}>
      {icon}
    </Box>
  );
};
export default CustomBottomIcons;
