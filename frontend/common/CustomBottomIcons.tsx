import {Box} from '@mui/material';
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

const CustomBottomIcons: FC<Props> = ({icon, onClickBtn, backGround}) => {
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
