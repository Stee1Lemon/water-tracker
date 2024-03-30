import { Form } from './SignupForm.styled';
import { NavLink } from 'react-router-dom';

export const SignupForm = () => {
  return (
    <Form>
      <h2>Sign Up</h2>
      <label>Enter your email</label>
      <input type="email" name="email" placeholder="E-mail" />
      <label>Enter your password</label>
      <input type="text" name="password" placeholder="Password" />
      <label>Repeat password</label>
      <input type="text" name="password" placeholder="Repeat password" />
      <button type="submit">Submit</button>
      <NavLink to="/signin">Sign in</NavLink>
    </Form>
  );
};
