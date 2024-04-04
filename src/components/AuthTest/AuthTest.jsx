import { useSelector, useDispatch } from 'react-redux';
// import { toggleAuth } from '../../redux/auth-test/auth-test-slice.js';
import { selectError, selectIsLoading } from '../../redux/root/rootSelectors.js';
import authApi from '../../redux/auth/authOperations.js';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader.jsx';

export const AuthTest = () => {
  // const isAuthOn = useSelector((state) => state.authTest.auth);
  const dispatch = useDispatch();
  const isLoadingRedux = useSelector(selectIsLoading);
  const errorRedux = useSelector(selectError);

  const handleSubmitRegister = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const result = dispatch(authApi.signupThunk({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }))
    form.reset();
    if (result.error) return Notiflix.Notify.failure(errorRedux);
  };

  const handleSubmitLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const result = dispatch(authApi.signinThunk({
      email: form.elements.email.value,
      password: form.elements.password.value,
    }));
    form.reset();
    if (result.error) return Notiflix.Notify.failure(errorRedux);

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmitRegister}>
          <h2>Sign Up</h2>
          <label>Enter your email</label>
          <input type="email" name="email" placeholder="E-mail" />
          <label>Enter your password</label>
          <input type="text" name="password" placeholder="Password" />
          <button type="submit">
            {isLoadingRedux ? <Loader /> : 'Submit'}
          </button>
        </form>
        {/* <button >
          {isAuthOn ? 'Log out' : 'Sign In'}
        </button> */}
        <form onSubmit={handleSubmitLogin}>
          <h2>Sign In</h2>
          <label>Enter your email</label>
          <input type="email" name="email" placeholder="E-mail" />
          <label>Enter your password</label>
          <input type="text" name="password" placeholder="Password" />
          <button type="submit">
            {isLoadingRedux ? <Loader /> : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};
