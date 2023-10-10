import {Box, Button, Card, Paper, Typography} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import React, {FC} from 'react';
interface Props {
  icon?: any;
  backgroundColor?: any;
  children?: any;
  onClickBtn?: any;
  backGround?: any;
  icons?: any;
  borderRadius?: any;
}

const CustomBottomIcons: FC<Props> = ({
  icon,
  backgroundColor,
  children,
  onClickBtn,
  backGround,
  borderRadius,
}) => {
  return (
    <Box
      onClick={onClickBtn}
      sx={{
        backgroundColor: backGround,
        textAlign: 'center',
        fontWeight: '600',
        cursor: 'pointer',
        borderRadius: '10px',
      }}>
      <Box>{icon}</Box>
    </Box>
  );
};
export default CustomBottomIcons;
