import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { signIn } from 'api/auth';
import { ErrorsCodes } from 'api/auth/enums';
import { InputText, InputTypes } from 'components/inputs/InputText';
import { Form } from 'components/Form';
import {
  ScFormBottom,
  ScFormConent,
  ScFormTitle,
  ScWhiteForm,
} from 'components/Form/styled';
import { ScSubTitle } from 'components/styles/common';
import { AuthorizationComponentProps, PageType } from '..';

export const SingInComponent: FC<AuthorizationComponentProps> = ({
  chagePageType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data: any) => {
    signIn(data.email, data.password).catch((error) => {
      switch (true) {
        case error.code === ErrorsCodes.USER_NOT_FOUND:
          setError('email', {
            type: 'manual',
            message: 'User not found!',
          });
          break;
        case error.code === ErrorsCodes.WRONG_PASS:
          setError('password', {
            type: 'manual',
            message: 'Wrong password!',
          });
          break;
        default:
          setError('email', {
            type: 'manual',
            message: '',
          });
          break;
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ScWhiteForm>
        <ScFormTitle>
          <ScSubTitle violet bold>
            Sing In
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
        </ScFormConent>
        <ScFormBottom>
          <Button variant="contained" color="secondary" type="submit">
            login
          </Button>
          <span className="bottom">
            Don't have an account?{' '}
            <a
              href="registration"
              className="bottom-link"
              onClick={(event) => chagePageType(event, PageType.SING_UP)}
            >
              🏃🏽‍♂️ Registration
            </a>
          </span>
        </ScFormBottom>
      </ScWhiteForm>
    </Form>
  );
};
