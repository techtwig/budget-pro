'use client';
import {
  Autocomplete,
  Chip,
  Container,
  FormControl,
  FormHelperText,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, {useEffect, useState} from 'react';
import SubmitButton from '@/common/button/SubmitButton';
import {CustomStyles} from '@/utilities/enums';
import BackButton from '@/common/button/BackButton';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import {headers, Month, months} from '@/utilities/helper';
import useNotiStack from '@/hooks/NotiStack';
import {date} from 'yup';
import {getValue} from '@mui/system';
import {BASE_URL} from '@/utilities/root';

const schema = yup.object().shape({
  budget_title: yup
    .string()
    .required('Require budget name')
    .max(30, 'Title must be less than or equal to 30 words'),
  amount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(100, 'minimun amount is greater than or equal to 100')
    .max(2000000, 'maximum amount is less than or equal to 2000000')
    .required('Amount is required'),

  category_ids: yup
    .array(yup.object().required())
    .required('Category selection is required'),
  wallet_id: yup.string().required('Required wallet type'),
  month: yup.date().required('Date is required'),
});

interface ISelect {
  _id: string;
  label: string;
}
type AutoSelectOption = {
  _id: string;
  label: string;
};

interface walletData {
  budget_title: string;
  amount: number;
  category_ids: [ISelect];
  wallet_id: string;
  month: any;
}

function formatDate(month_id: number) {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = 6;
  if (month > month_id) {
    year = year + 1;
  }
  return new Date(`${year},${month_id},${day}`);
}

const AddNewBudget = () => {
  const {successStack, errorStack} = useNotiStack();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    reset,
    formState: {errors},
  } = useForm<walletData | any>({
    resolver: yupResolver(schema),
  });

  const [categories, setCategories] = useState<AutoSelectOption[] | null>();
  const [wallets, setWallets] = useState([{}]);

  const handleCategoryData = (data: any) => {
    return data.map((item: any) => {
      return item._id;
    });
  };

  useEffect(() => {
    axios
      .get(BASE_URL + '/category')
      .then((response) => setCategories(response.data.data));

    axios
      .get(BASE_URL + '/wallet')
      .then((response) => setWallets(response.data.data));
  }, []);

  const handleSubmitData = (data: any) => {
    let month_id = getValues('month');
    data.month = formatDate(month_id);
    console.log('data after', data);
    let catData = getValues('category_ids');
    data.category_ids = handleCategoryData(catData);
    axios
      .post(BASE_URL + '/budget/create', data, {headers})
      .then(function (response) {
        //handle success
        successStack('Budget created successfully');
        reset();
        console.log('response', response);
      })
      .catch(function (response) {
        errorStack('Failed to create budget');
        //handle error
        console.log(response);
      });
  };
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
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <BackButton />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '20px', fontWeight: '700'}}>
              Add new budget
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Budget Name <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              InputLabelProps={{
                required: true,
              }}
              {...register('budget_title')}
              sx={{
                width: '100%',
              }}
              placeholder='Budget name'
              InputProps={{
                sx: {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}
              type='text'
              error={!!errors.budget_title}
              helperText={errors.budget_title?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Amount <span style={{color: 'red'}}>*</span>
            </Typography>
            <TextField
              InputLabelProps={{
                required: true,
              }}
              {...register('amount', {valueAsNumber: true})}
              sx={{
                width: '100%',
              }}
              placeholder='0'
              InputProps={{
                sx: {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}
              type='number'
              error={!!errors.amount}
              helperText={errors.amount?.message?.toString()}
            />
          </Grid>

          <Grid item xs={12}>
            {/*<CustomSelectField*/}
            {/*  errors={errors}*/}
            {/*  required={true}*/}
            {/*  label={'Wallet'}*/}
            {/*  id={'wallet_id'}*/}
            {/*  options={wallets}*/}
            {/*  optionId={'_id'}*/}
            {/*  optionLabel={'wallet_title'}*/}
            {/*  control={control}*/}

            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Wallet<span style={{color: 'red'}}>*</span>
            </Typography>

            <FormControl
              sx={{
                width: '100%',
              }}>
              {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
              <Controller
                control={control}
                name={'wallet_id'}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, value}}) => (
                  <Select
                    sx={{
                      borderRadius: '15px',
                      border: '2px solid #F4F2F3',
                      height: '55px',
                    }}
                    labelId='level-label'
                    value={value || ''}
                    onChange={onChange}
                    // displayEmpty
                  >
                    {wallets.map((option: any, index: number) => (
                      <MenuItem key={index} value={option._id}>
                        {option.wallet_title}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              {errors.wallet_id && (
                <FormHelperText error>
                  <>{errors?.wallet_id?.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Budget month<span style={{color: 'red'}}>*</span>
            </Typography>

            <FormControl
              sx={{
                width: '100%',
              }}>
              {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
              <Controller
                control={control}
                name={'month'}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, value}}) => (
                  <Select
                    sx={{
                      borderRadius: '15px',
                      border: '2px solid #F4F2F3',
                      height: '55px',
                    }}
                    labelId='level-label'
                    value={value || ''}
                    onChange={onChange}
                    // displayEmpty
                  >
                    {months.map((month: Month, index: number) => (
                      <MenuItem key={index} value={month.id}>
                        {month.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              {errors.month && (
                <FormHelperText error>
                  <>{errors?.month?.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{mb: '16px'}}>
            <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
              Budget For <span style={{color: 'red'}}>*</span>
            </Typography>

            {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
            <FormControl
              sx={{
                width: '100%',

                '.MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  border: '2px solid #F4F2F3',
                },
              }}>
              <Controller
                name={'category_ids'}
                control={control}
                rules={{
                  required: 'Please select a value',
                }}
                render={({field: {onChange}}) => (
                  <Autocomplete
                    multiple
                    id='tags-outlined'
                    defaultValue={[]}
                    options={categories || []}
                    onChange={(event, option) => {
                      onChange(option);
                    }}
                    getOptionLabel={(option: AutoSelectOption) => {
                      return option ? option?.label : '';
                    }}
                    filterSelectedOptions
                    renderInput={(params: any) => (
                      <TextField {...params} placeholder='Category' />
                    )}
                    renderOption={(props, option: AutoSelectOption) => {
                      return (
                        <li {...props} key={option?._id}>
                          {option?.label}
                        </li>
                      );
                    }}
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map(
                        (option: AutoSelectOption, index: number) => (
                          <Chip
                            {...getTagProps({index})}
                            key={option?._id}
                            label={option?.label}
                          />
                        ),
                      );
                    }}
                  />
                )}
              />
              {errors.category_ids && (
                <FormHelperText sx={{color: '#f44336'}}>
                  <>{errors.category_ids.message}</>
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{bottom: '10px', position: 'sticky'}}>
            <SubmitButton>ADD A BUDGET</SubmitButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AddNewBudget;
