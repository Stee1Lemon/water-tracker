import { SignupForm } from 'components/SignupForm/SignupForm';
import { FormContainer, FormSection } from './SignupPage.styled';

const SignupPage = () => {
  return (
    <FormSection>
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </FormSection>
  );
};

export default SignupPage;
