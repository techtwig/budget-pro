import {Box, Button, Grid, Typography} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, {FC, useEffect, useState} from 'react';
import Drawers from '@/component/DrewerComponent';
import {useRouter} from 'next/navigation';

interface Props {
  title: string;
  subTitle?: string;
  setting?: number;
  onClk?: any;
}

const CustomCardForSetting: FC<Props> = ({title, subTitle, setting, onClk}) => {
  // const [state, setSate]=React.useState()
  // const handleDrewer = () => {
  //   setState(!state);
  //   return;
  // };
  return (
    <Grid item xs={12}>
      <Grid
        container
        onClick={onClk}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            border: '1px solid #00FF00',
            color: 'black',
            backgroundColor: 'lightblue',
          },
          borderRadius: '20px',
        }}>
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
            // onClick={handleDrewer}
            // onClick={handleDrewer}
            sx={{
              p: '0px 0px',
              maxWidth: '20px',
              color: 'common.white',
              ':hover': {
                backgroundColor: 'common.white',
              },
            }}
            endIcon={<PlayArrowIcon sx={{color: '#000'}} />}></Button>

          {/*<Drawers state={state} setState={setState} />*/}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomCardForSetting;
