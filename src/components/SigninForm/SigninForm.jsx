import { Form } from './SigninForm.styled';
import { NavLink } from 'react-router-dom';

export const SigninForm = () => {
  return (
    <Form>
      <h2>Sign In</h2>
      <label>Enter your email</label>
      <input type="email" name="email" placeholder="E-mail" />
      <label>Enter your password</label>
      <input type="text" name="password" placeholder="Password" />
      <button type="submit">Sign In</button>
      <NavLink to="/signin">Sign up</NavLink>
    </Form>
  );
};
