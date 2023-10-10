import {
  Avatar,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import React, {FC} from 'react';

interface Props {
  title: string;
  avatar?: any;
}
const CustomDrawerCard: FC<Props> = ({title}) => {
  return (
    <>
      <Grid item xs={2}>
        <Avatar
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          sx={{width: 24, height: 24}}
        />
      </Grid>
      <Grid item xs={5} sx={{pl: '10px'}}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'right',
          justifyContent: 'right',
        }}>
        {/*<Button*/}
        {/*  sx={{color: '#000', p: '0px 0px'}}*/}
        {/*  endIcon={<PlayArrowIcon sx={{color: '#000', pr: '0px'}} />}></Button>*/}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='' />
        </FormGroup>
      </Grid>
    </>
  );
};
export default CustomDrawerCard;
