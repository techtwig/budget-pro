import {Button, Grid, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, {FC, useState} from 'react';
import Drawers from '@/component/DrewerComponent';

interface Props {
  title: string;
  subTitle?: string;
}

const CustomCardForSetting: FC<Props> = ({title, subTitle}) => {
  const handleDrewer = () => {
    setState(!state);
    return;
  };
  const [state, setState] = useState(false);
  return (
    <>
      <Grid item xs={7} sx={{p: '20px'}}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'right',
          p: '20px 0px',
        }}>
        <Typography sx={{opacity: '.3'}}>{subTitle}</Typography>
        <Button
          onClick={handleDrewer}
          sx={{color: '#000', p: '0px 0px', maxWidth: '20px'}}
          endIcon={<PlayArrowIcon sx={{color: '#000'}} />}></Button>

        <Drawers state={state} setState={setState} />
      </Grid>
    </>
  );
};
export default CustomCardForSetting;
