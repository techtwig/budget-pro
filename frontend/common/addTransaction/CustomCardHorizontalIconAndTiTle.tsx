import {Box, Card, Grid} from '@mui/material';
import React from 'react';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const CustomCardHorizonatlIconAndTitle = ({
  children,
  onClickBtn,
  backGround,
  icons,
}: any) => {
  return (
    <>
      <Box>{icons}</Box>
      <Box>{children}</Box>
    </>
  );
};
export default CustomCardHorizonatlIconAndTitle;
