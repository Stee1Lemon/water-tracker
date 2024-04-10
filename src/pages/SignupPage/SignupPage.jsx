import { SignupForm } from 'components/SignupForm/SignupForm';
import { FormContainer } from './SignupPage.styled';

const SignupPage = () => {
  return (
    <section>
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </section>
  );
};

export default SignupPage;
