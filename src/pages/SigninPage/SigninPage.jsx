import { SigninForm } from 'components/SigninForm/SigninForm';
import { FormContainer, FormSection } from './SigninPage.styled';

const SigninPage = () => {
  return (
    <FormSection>
      <FormContainer>
        <SigninForm />
      </FormContainer>
    </FormSection>
  );
};

export default SigninPage;
