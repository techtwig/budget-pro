import {Box, Card, Grid} from '@mui/material';
import React from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const CustomButtonIcon = ({
  children,
  onClickBtn,
  backGround,
  icons,
  borderRadius,
}: any) => {
  return (
    <Card
      elevation={0}
      sx={{
        background: '#fff',
        flexDirection: 'column',
        borderRadius: '10px',
      }}>
      <Box
        onClick={onClickBtn}
        sx={{
          backgroundColor: backGround,
          color: '#040303',
          padding: '10px 10px',
          borderRadius: '25px',
          textAlign: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '16px',
        }}>
        <Box>{icons}</Box>
        {children}
      </Box>
    </Card>
  );
};

export default CustomButtonIcon;
