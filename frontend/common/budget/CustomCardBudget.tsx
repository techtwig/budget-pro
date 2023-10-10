import {Box, Card, Divider, Grid, Paper, Typography} from '@mui/material';
import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
import {FC} from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
interface Props {
  title: string;
  amount: string;
  icons?: any;
  budgetTitle?: string;
  icons2: any;
}
const CustomBudgetCard: FC<Props> = ({
  title,
  amount,
  icons,
  icons2,
  budgetTitle,
}) => {
  return (
    <Grid container sx={{border: '2px solid #F3F1F4', borderRadius: '15px'}}>
      <Grid item xs={2}>
        {icons}
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: '12px',
          }}>
          <Grid item xs={6}>
            <Typography sx={{fontSize: '14px', fontWeight: '700'}}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                mt: '1px',
                fontWeight: '700',
              }}>
              {budgetTitle}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              alignItems: 'end',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Box>
              <EditRoundedIcon
                sx={{color: '#7F7E80', fontSize: '120%', mt: '5px'}}
              />
            </Box>

            <Typography
              sx={{
                fontSize: '14px',
                mt: '1px',
                fontWeight: '700',
                opacity: '.5',
              }}>
              {amount}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomBudgetCard;
