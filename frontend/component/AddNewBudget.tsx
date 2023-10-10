'use client';
import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';
import {budget, currencies, wallets} from '@/common/ListedData';
import {useRouter} from 'next/navigation';

const AddNewBudget = () => {
  const Router = useRouter();
  const handleBack = () => {
    return Router.back();
  };
  return (
    <Container
      maxWidth={'xs'}
      sx={{minHeight: '100vh', backgroundColor: '#FEFEFF', pt: '40px'}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            mt: '36px',
          }}>
          <Button
            sx={{p: '0px 0px', display: 'flex', justifyContent: 'initial'}}
            onClick={handleBack}>
            <KeyboardBackspaceIcon
              sx={{
                color: '#403F40',
                backgroundColor: '#fff',
                borderRadius: '8px',
                fontSize: '240%',
                border: '2px solid #EEEDEE',
                p: '3px',
              }}
            />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
            Add new budget
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '95%'}}
            id='budget-name'
            label='Budget Name'
            type='budget-name'
            autoComplete='current-password'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Amount
          </Typography>
          <TextField
            sx={{width: '95%'}}
            id='budget-name'
            label='$0'
            type='budget-name'
            autoComplete='current-password'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '95%'}}
            id='currency'
            select
            defaultValue='EUR'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}>
            {currencies.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '95%'}}
            id='currency'
            select
            defaultValue='wallets'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}>
            {wallets.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
            Budget Name
          </Typography>
          <TextField
            sx={{width: '95%'}}
            id='currency'
            select
            defaultValue='expenses'
            InputProps={{
              sx: {
                borderRadius: '15px',
                border: '2px solid #F4F2F3',
              },
            }}>
            {budget.map((option) => (
              <MenuItem key={option.title} value={option.title}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{mr: '16px', position: 'fixed', bottom: '10px'}}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: '25px',
              backgroundColor: '#343333',
              height: '50px',
              position: 'fixed',
              bottom: '0px',
              width: '399px',
            }}>
            ADD A BUDGET
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AddNewBudget;
