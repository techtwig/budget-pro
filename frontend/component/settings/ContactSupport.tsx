'use client';
import {Box, Container, Typography} from '@mui/material';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';

const ContactSupport = () => {
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
      <Typography sx={{fontSize: '20px', mb: '20px', fontWeight: '700'}}>
        Contract support
      </Typography>
      <Typography>For details visit out web page</Typography>
    </Container>
  );
};
export default ContactSupport;
