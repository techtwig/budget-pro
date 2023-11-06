import React from 'react';
import {Grid, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CustomDrawerCard from '@/common/CustomDrawer';

const Drawers = ({state, setState}: any) => {
  const toggleDrawer = (anchor: any, close: any) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(close);
  };

  const itemList = (anchor: any) => (
    <Grid
      container
      spacing={2}
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '250px',
        height: '100%',
        m: '0px',
        p: '10px',
      }}
      role='drawer'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Grid item xs={12}>
        <Typography sx={{pt: 4, color: 'black', fontSize: 20, fontWeight: 700}}>
          Select currency
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography sx={{m: '10px 0px'}}> {'Recent '}</Typography>
      </Grid>
      <Grid item xs={12} sx={{backgroundColor: '#fff'}}>
        <Grid container>
          <CustomDrawerCard title={'ABc'} />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Typography sx={{m: '10px 0px'}}> {'Popular '}</Typography>
      </Grid>
      <Grid item xs={12} sx={{backgroundColor: '#fff'}}>
        <Grid container>
          <CustomDrawerCard title={'ABc'} />
          <CustomDrawerCard title={'ABc'} />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Typography sx={{m: '10px 0px'}}> {'A '}</Typography>
      </Grid>
      <Grid item xs={12} sx={{backgroundColor: '#fff'}}>
        <Grid container>
          <CustomDrawerCard title={'ABc'} />
          <CustomDrawerCard title={'ABc'} />
          <CustomDrawerCard title={'ABc'} />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      {/*<Button*/}
      {/*  onClick={toggleDrawer('bottom', true)}*/}
      {/*  endIcon={<PlayArrowIcon sx={{color: '#000'}} />}></Button>*/}
      <Drawer
        sx={{
          '.MuiDrawer-paper': {
            backgroundColor: '#FBF9FA',
            borderTopRightRadius: '50px',
            borderTopLeftRadius: '50px',
            minWidth: 'xs',
          },
          '& .MuiDrawer-root': {
            position: 'absolute',
          },
        }}
        anchor={'bottom'}
        open={state}
        onClose={toggleDrawer('bottom', false)}>
        {itemList('bottom')}
      </Drawer>
    </Box>
  );
};
export default Drawers;
