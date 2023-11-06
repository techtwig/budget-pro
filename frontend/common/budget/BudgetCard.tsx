import {Box, Divider, Grid, Typography} from '@mui/material';
import {FC} from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {CardBorder} from '@/utilities/enums';

interface Props {
  title: string;
  amount: string;
  icons?: any;
  budgetTitle?: string;
  icons2: any;
}
const BudgetCard: FC<Props> = ({title, amount, icons, budgetTitle}) => {
  return (
    <Grid container sx={{border: CardBorder.TWO_PX, borderRadius: '15px'}}>
      <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
        {icons}
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: '16px',
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
                sx={{color: '#E1E0E0', fontSize: '120%', mt: '5px'}}
              />
            </Box>

            <Typography
              sx={{
                fontSize: '14px',
                mt: '1px',
                fontWeight: '700',
                opacity: '.3',
              }}>
              {amount}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              sx={{
                height: '2px',
                width: '100%',
                fontWeight: 'bold',
                backgroundColor: '#E7E4ED',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BudgetCard;
