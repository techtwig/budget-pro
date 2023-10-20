import {Box} from '@mui/material';
import React from 'react';

const CustomCardHorizonatlIconAndTitle = ({children, icons}: any) => {
  return (
    <>
      <Box>{icons}</Box>
      <Box sx={{fontSize: '12px', fontWeight: '700'}}>{children}</Box>
    </>
  );
};
export default CustomCardHorizonatlIconAndTitle;
