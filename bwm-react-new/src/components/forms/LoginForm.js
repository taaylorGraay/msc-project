import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import FormError from './FormError';

const Error = ({ children }) =>
  <div className="alert alert-danger">
    {children}
  </div>

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input {...register("email", { required: 'Email is required', pattern: { value: EMAIL_PATTERN, message: 'Invalid email format!' } })}
          name="email"
          type="email"
          className="form-control"
          id="email" />
        <FormError errors={errors} name="email">
          {(message) => <p>{message}</p>}
        </FormError>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input {...register("password", { required: "Password is required!", minLength: { value: 8, message: 'Minimum length of password is 8 characters!' } })}
          name="password"
          type="password"
          className="form-control"
          id="password" />
        <ErrorMessage as={<Error />} errors={errors} name="password">
          {({ message }) => <p>{message}</p>}
        </ErrorMessage>
      </div>
      <button
        type="submit"
        className="btn btn-bwm-main">Submit</button>
    </form>
  )
}

export default LoginForm;