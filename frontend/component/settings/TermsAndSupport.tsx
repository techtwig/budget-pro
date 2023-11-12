'use client';
import {Box, Container, Typography} from '@mui/material';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';

const TermsAndSupports = () => {
  return (
    <Container
      maxWidth={'xs'}
      disableGutters={true}
      sx={{
        minHeight: '100vh',
        backgroundColor: '#FEFEFF',
        pt: CustomStyles.CONTAINER_TOP,
        pl: CustomStyles.CONTAINER_LEFT,
        pr: CustomStyles.CONTAINER_RIGHT,
        pb: '100px',
        position: 'relative',
      }}>
      <Box>
        <BackButton />
      </Box>
      <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
        This is terms and conditions page
      </Typography>
      <Typography>
        Budget pro is a financial web app. It is very much helpful for those who
        use this app
      </Typography>
    </Container>
  );
};
export default TermsAndSupports;
