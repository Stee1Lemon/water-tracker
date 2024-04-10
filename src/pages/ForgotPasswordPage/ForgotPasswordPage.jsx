import ForgotPasswordForm from 'components/ForgotPaswordForm/ForgotPasswordForm';
import { FormContainer } from 'pages/SigninPage/SigninPage.styled';

const ForgotPassword = () => {
  return (
    <>
      <section>
        <FormContainer>
          <ForgotPasswordForm />
        </FormContainer>
      </section>
    </>
  );
};

export default ForgotPassword;
