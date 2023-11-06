import {Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';
import {useRouter} from 'next/navigation';

const BackButton = () => {
  const Router = useRouter();
  const handleBack = () => {
    return Router.back();
  };

  return (
    <Button
      sx={{
        p: '0px 0px',
        display: 'flex',
        justifyContent: 'initial',
        color: 'common.white',
        ':hover': {
          backgroundColor: 'common.white',
        },
      }}
      onClick={handleBack}>
      <KeyboardBackspaceIcon
        sx={{
          color: '#403F40',
          backgroundColor: '#fff',
          borderRadius: '12px',
          fontSize: '245%',
          border: '2px solid #EEEDEE',
          p: '3px',
        }}
      />
    </Button>
  );
};
export default BackButton;
