import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import {Controller} from 'react-hook-form';
import React from 'react';

interface ICustomSelect {
  label: string;
  id: any;
  required?: boolean;
  control: any;
  options: any[];
  errors?: any;
}
const CustomSelectField = ({
  label,
  id,
  control,
  options,
  required,
  errors,
}: ICustomSelect) => {
  let errorObj = errors?.[id];
  return (
    <>
      <Typography sx={{fontSize: '16px', fontWeight: '700', pb: '3px'}}>
        {label} {required && <span style={{color: 'red'}}>*</span>}
      </Typography>
      <FormControl
        sx={{
          width: '100%',
        }}>
        {/*<InputLabel id='demo-multiple-name-label'>Name</InputLabel>*/}
        <Controller
          control={control}
          name={id}
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
              {options.map((option: any, index: number) => (
                <MenuItem key={index} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errorObj && (
          <FormHelperText sx={{color: '#D92F21'}}>
            {errorObj.message}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};
export default CustomSelectField;
