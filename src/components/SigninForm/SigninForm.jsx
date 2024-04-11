import { Form, InputDiv, Message } from './SigninForm.styled';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import icons from '../../assets/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../redux/auth/authOperations';
import Notiflix from 'notiflix';
import { useTranslation } from 'react-i18next';
import Loader from 'components/Loader/Loader';
import { selectIsLoading } from '../../redux/root/rootSelectors';

export const SigninForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must contain at least 8 characters')
        .max(64, 'Password must contain no more than 64 characters'),
    }),
    onSubmit: async (values) => {
      Notiflix.Notify.info(
        'Please, consider that we use free API resources. Initial load may take some time.'
      );
      const result = await dispatch(authApi.signinThunk(values));
      if (result.error) return Notiflix.Notify.failure(result.payload);
    },
  });

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>{t('authForm.headerSignin')}</h2>
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : t('authForm.buttonSignin')}
      </button>{' '}
      <NavLink to="/forgot-password">{t('authForm.forgotPass')}</NavLink>
      <br />
      <NavLink to="/signup">{t('authForm.linkSignup')}</NavLink>
    </Form>
  );
};
