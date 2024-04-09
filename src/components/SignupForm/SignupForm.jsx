import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useTranslation } from 'react-i18next';
import { Form, InputDiv, Message, SignupTeam } from './SignupForm.styled';
import icons from '../../assets/icons.svg';
import authApi from '../../redux/auth/authOperations';
import Loader from 'components/Loader/Loader';
import { selectIsLoading } from '../../redux/root/rootSelectors';
import ModalTeam from 'components/ModalTeam/ModalTeam';

export const SignupForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);

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
      Notiflix.Notify.info(
        'Please, consider that we use free API resources. Initial load may take some time.'
      );
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
      <h2>{t('authForm.headerSignup')}</h2>
      <label>{t('authForm.labelEmail')}</label>
      <InputDiv>
        <input
          type="email"
          name="email"
          placeholder={t('authForm.placeholdEmail')}
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
      <label>{t('authForm.labelPassword')}</label>
      <InputDiv>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder={t('authForm.placeholdPassword')}
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
      <label>{t('authForm.labelRepeatPassword')}</label>
      <InputDiv>
        <input
          type={showPassword ? 'text' : 'password'}
          name="repeatedPassword"
          placeholder={t('authForm.labelRepeatPassword')}
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : t('authForm.buttonSignup')}
      </button>
      <NavLink to="/signin">{t('authForm.linkSignin')}</NavLink>
      <SignupTeam>
        <ModalTeam />
      </SignupTeam>
    </Form>
  );
};
