import React, { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { InputBasePropsColorOverrides, TextField } from '@mui/material';

import { OverridableStringUnion } from '@mui/types';
import { ScInputError, ScInputText } from './styled';

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
}

type ColorsType = OverridableStringUnion<
  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
  InputBasePropsColorOverrides
>;

interface InputProps {
  defaultValue?: string;
  name: string;
  required?: boolean;
  color?: ColorsType;
  type?: InputTypes;
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
  errorText?: string;
  label?: string;
  placeholder?: string;
}

export const InputText: FC<InputProps> = ({
  defaultValue,
  name,
  required,
  color,
  type,
  register,
  errors,
  errorText,
  label,
  placeholder,
}) => {
  return (
    <ScInputText>
      <TextField
        label={label}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, { required })}
        color={color}
        type={type}
        error={errors[name] ? true : false}
      />
      {errors[name] && (
        <ScInputError>
          {errors[name].message !== ''
            ? errors[name].message
            : 'This field is required'}
        </ScInputError>
      )}
    </ScInputText>
  );
};
