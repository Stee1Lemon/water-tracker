import { useFormik } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  InputDiv,
  Message,
  SigninTeam,
} from '../SigninForm/SigninForm.styled';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalTeam from 'components/ModalTeam/ModalTeam';
import Loader from 'components/Loader/Loader';
import { selectIsLoading } from '../../redux/root/rootSelectors';
import authApi from '../../redux/auth/authOperations';

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email'),
    }),
    onSubmit: async (values) => {
      Notiflix.Notify.info(
        'Please, consider that we use free API resources. Initial load may take some time.'
      );
      const result = await dispatch(authApi.forgotPassThunk(values));
      if (result.error) return Notiflix.Notify.failure(result.payload);
      Notiflix.Notify.success('Email was send');
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <h2>{t('authForm.headerForgotPassword')}</h2>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : t('authForm.buttonSendNewPassword')}
        </button>
        <NavLink to="/signin">{t('authForm.linkSignin')}</NavLink>
        <SigninTeam>
          <ModalTeam />
        </SigninTeam>
      </Form>
    </>
  );
};

export default ForgotPasswordForm;
