import {Button} from '@mui/material';
import React from 'react';
interface IActionButton {
  onClickBtn?: any;
  children?: any;
}

const SubmitButton = ({onClickBtn, children}: IActionButton) => {
  return (
    <Button
      onClick={onClickBtn}
      type='submit'
      variant='contained'
      sx={{
        borderRadius: '25px',
        backgroundColor: 'common.black',
        position: 'fixed',
        height: '50px',
        bottom: '30px',
        minWidth: '415px',
        fontWeight: '700',
        ':hover': {
          backgroundColor: 'common.black',
          color: 'common.white',
        },
      }}>
      {children}
    </Button>
  );
};
export default SubmitButton;
