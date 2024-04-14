import { SigninForm } from 'components/SigninForm/SigninForm';
import { FormContainer } from './SigninPage.styled';
// import { useSearchParams } from 'react-router-dom';

const SigninPage = () => {
  // const [token, setToken] = useSearchParams();
  // console.log(token.get('token'))

  return (
    <section>
      <FormContainer>
        <SigninForm />
      </FormContainer>
    </section>
  );
};

export default SigninPage;
