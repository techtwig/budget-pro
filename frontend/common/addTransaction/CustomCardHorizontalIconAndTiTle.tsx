import {Box} from '@mui/material';
import React from 'react';

const CustomCardHorizonatlIconAndTitle = ({children, icons}: any) => {
  return (
    <>
      <Box>{icons}</Box>
      <Box>{children}</Box>
    </>
  );
};
export default CustomCardHorizonatlIconAndTitle;
