import {Controller} from 'react-hook-form';
import TextField from '@mui/material/TextField';
export const CustomTextInput = ({
  name,
  control,
  label,
  sx,
  id,
  placeholder,
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}, fieldState: {error}, formState}) => (
        <TextField
          helperText={error ? error.message : null}
          id={id ? id : ''}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
          placeholder={placeholder ? placeholder : ''}
        />
      )}
    />
  );
};
