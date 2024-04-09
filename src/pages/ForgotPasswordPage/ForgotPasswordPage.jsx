import ForgotPasswordForm from 'components/ForgotPaswordForm/ForgotPasswordForm';
import { FormContainer, FormSection } from 'pages/SigninPage/SigninPage.styled';

const ForgotPassword = () => {
  return (
    <>
      <FormSection>
        <FormContainer>
          <ForgotPasswordForm />
        </FormContainer>
      </FormSection>
    </>
  );
};

export default ForgotPassword;
