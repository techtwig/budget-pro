import {Grid, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
  title: string;
  amount: string;
  icons?: any;
  subTitle?: string;
  icons2: any;
}
const CustomHorizontalCard: FC<Props> = ({
  title,
  amount,
  icons,
  icons2,
  subTitle,
}) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        background: '#fff',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Grid
        item
        xs={1.5}
        sx={{
          height: '50px',
          width: '50px',
          m: '6px',
          backgroundColor: '#EBE9ED',
          borderRadius: '14px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons}
      </Grid>
      <Grid item xs={5}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            opacity: '0.6',
          }}>
          {subTitle}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1.5}
        sx={{
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',
        }}>
        {icons2}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'right',
          fontWeight: '700',
          textAlign: 'right',
          pr: '9px',
          opacity: '.4',
        }}>
        {amount}
      </Grid>
    </Grid>
  );
};
export default CustomHorizontalCard;

// import {Box, Card, Paper, Typography} from '@mui/material';
// import FloodRoundedIcon from '@mui/icons-material/FloodRounded';
// import {FC} from 'react';
// interface Props {
//   title: string;
//   amount: string;
//   icons?: any;
//   subTitle?: string;
//   icons2: any;
// }
// const CustomHorizontalCard: FC<Props> = ({
//   title,
//   amount,
//   icons,
//   icons2,
//   subTitle,
// }) => {
//   return (
//     <Card
//       elevation={0}
//       sx={{
//         display: 'flex',
//         background: '#fff',
//         flexDirection: 'row',
//         borderRadius: '20px',
//         border: '1px solid #F0EEEF',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//       <Box
//         sx={{
//           height: '50px',
//           width: '50px',
//           backgroundColor: '#EBE9ED',
//           m: '7px',
//           borderRadius: '14px',
//           color: '#fff',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {icons}
//       </Box>
//       <Box sx={{minWidth: '180px', ml: '10px'}}>
//         <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
//           {title}
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: '14px',
//             mt: '1px',
//             fontWeight: '700',
//             opacity: '0.6',
//           }}>
//           {subTitle}
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           m: '13px 13px',
//           borderRadius: '10px',
//           color: '#fff',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         {icons2}
//       </Box>
//       <Box
//         sx={{
//           m: '12px 13px',
//           borderRadius: '10px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontWeight: '700',
//         }}>
//         {amount}
//       </Box>
//     </Card>
//   );
// };
// export default CustomHorizontalCard;
