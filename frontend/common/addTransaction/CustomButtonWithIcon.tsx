import {Box, Card, Grid} from '@mui/material';
import React from 'react';

const CustomButtonIcon1 = ({
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
        borderRadius: borderRadius ? borderRadius : '10px',
        m: '10px',
      }}>
      <Box
        onClick={onClickBtn}
        sx={{
          backgroundColor: backGround,
          color: '#040303',
          padding: '5px 5px',
          borderRadius: '15px',
          textAlign: 'center',
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '12px',
        }}>
        <Box>{icons}</Box>
        {children}
      </Box>
    </Card>
  );
};

export default CustomButtonIcon1;
