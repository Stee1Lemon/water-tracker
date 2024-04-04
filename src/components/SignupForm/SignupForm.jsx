import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Form, InputDiv, Message } from './SignupForm.styled';
import icons from '../../assets/icons.svg';
import authApi from '../../redux/auth/authOperations';

export const SignupForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must contain at least 8 characters')
        .max(64, 'Password must contain no more than 64 characters'),
      repeatedPassword: Yup.string()
        .required('Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async ({ email, password }) => {
      const register = await dispatch(authApi.signupThunk({ email, password }));
      if (register.error) return Notiflix.Notify.failure(register.payload);

      const login = await dispatch(authApi.signinThunk({ email, password }));
      if (login.error) return Notiflix.Notify.failure(login.payload);

      formik.resetForm();
    },
  });

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>Sign Up</h2>
      <label>Enter your email</label>
      <InputDiv>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            color:
              formik.errors.email && formik.touched.email
                ? 'var(--secondary-second)'
                : 'var(--primary-focus)',
            border:
              formik.errors.email && formik.touched.email
                ? '1px solid var(--secondary-second)'
                : '1px solid var(--secondary-fifth)',
          }}
        />
        {formik.errors.email && formik.touched.email ? (
          <Message>{formik.errors.email}</Message>
        ) : null}
      </InputDiv>
      <label>Enter your password</label>
      <InputDiv>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{
            color:
              formik.errors.password && formik.touched.password
                ? 'var(--secondary-second)'
                : 'var(--primary-focus)',
            border:
              formik.errors.password && formik.touched.password
                ? '1px solid var(--secondary-second)'
                : '1px solid var(--secondary-fifth)',
          }}
        />
        <button
          type="button"
          className="icon-eye"
          onClick={toggleVisibility}
          style={{
            top:
              formik.errors.password && formik.touched.password ? '23%' : '30%',
          }}
        >
          <svg width="16" height="16" className="icon">
            <use
              href={
                showPassword
                  ? icons + '#icon-opened-eye'
                  : icons + '#icon-closed-eye'
              }
            ></use>
          </svg>
        </button>
        {formik.errors.password && formik.touched.password ? (
          <Message>{formik.errors.password}</Message>
        ) : null}
      </InputDiv>
      <label>Repeat password</label>
      <InputDiv>
        <input
          type={showPassword ? 'text' : 'password'}
          name="repeatedPassword"
          placeholder="Repeat password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatedPassword}
          style={{
            color:
              formik.errors.repeatedPassword && formik.touched.repeatedPassword
                ? 'var(--secondary-second)'
                : 'var(--primary-focus)',
            border:
              formik.errors.repeatedPassword && formik.touched.repeatedPassword
                ? '1px solid var(--secondary-second)'
                : '1px solid var(--secondary-fifth)',
          }}
        />
        <button
          type="button"
          className="icon-eye"
          onClick={toggleVisibility}
          style={{
            top:
              formik.errors.repeatedPassword && formik.touched.repeatedPassword
                ? '23%'
                : '30%',
          }}
        >
          <svg width="16" height="16" className="icon">
            <use
              href={
                showPassword
                  ? icons + '#icon-opened-eye'
                  : icons + '#icon-closed-eye'
              }
            ></use>
          </svg>
        </button>
        {formik.errors.repeatedPassword && formik.touched.repeatedPassword ? (
          <Message>{formik.errors.repeatedPassword}</Message>
        ) : null}
      </InputDiv>
      <button type="submit">Submit</button>
      <NavLink to="/signin">Sign in</NavLink>
    </Form>
  );
};
