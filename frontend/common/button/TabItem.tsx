import {Box, Card} from '@mui/material';
import React from 'react';

const TabItem = ({children, onClickBtn, backGround, icons}: any) => {
  return (
    <Card
      elevation={0}
      sx={{
        background: '#FAF9FA',
        flexDirection: 'column',
        borderRadius: '10px',
        display: 'flex',
        textAlign: 'center',
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

export default TabItem;
