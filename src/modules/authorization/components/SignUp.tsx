import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { signUp } from 'api/auth';
import { ErrorsCodes } from 'api/auth/enums';
import { Form } from 'components/Form';
import { InputText, InputTypes } from 'components/inputs/InputText';
import { AuthorizationComponentProps, PageType } from '..';
import {
  ScFormBottom,
  ScFormConent,
  ScFormTitle,
  ScWhiteForm,
} from 'components/Form/styled';
import { ScSubTitle } from 'components/styles/common';

export const SingUpComponent: FC<AuthorizationComponentProps> = ({
  chagePageType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data: any) => {
    if (data.password === data.passwordConfirm) {
      signUp(data.email, data.password).catch((error) => {
        if (error.code === ErrorsCodes.EMAIL_IN_USE) {
          setError('email', {
            type: 'manual',
            message: 'Email already in use',
          });
        } else {
          setError('email', {
            type: 'manual',
            message: '',
          });
        }
      });
    } else {
      setError('passwordConfirm', { type: 'manual', message: undefined });
      setError('password', {
        type: 'manual',
        message: 'Passwords must match!',
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ScWhiteForm>
        <ScFormTitle>
          <ScSubTitle violet bold>
            Sing Up
          </ScSubTitle>
        </ScFormTitle>
        <ScFormConent>
          <InputText
            name="email"
            type={InputTypes.EMAIL}
            register={register}
            required
            errors={errors}
            label="Email"
            placeholder="some@mail.com"
          />
          <InputText
            name="password"
            type={InputTypes.PASSWORD}
            register={register}
            required
            errors={errors}
            label="Password"
            placeholder="123Abc"
          />
          <InputText
            name="passwordConfirm"
            type={InputTypes.PASSWORD}
            register={register}
            required
            errors={errors}
            label="Confirm Password"
            placeholder="123Abc"
          />
        </ScFormConent>
        <ScFormBottom>
          <Button variant="contained" color="secondary" type="submit">
            login
          </Button>
          <span className="bottom">
            Already have an account?{' '}
            <a
              href="registration"
              className="bottom-link"
              onClick={(event) => chagePageType(event, PageType.SING_IN)}
            >
              🏃🏽‍♂️ Login
            </a>
          </span>
        </ScFormBottom>
      </ScWhiteForm>
    </Form>
  );
};
