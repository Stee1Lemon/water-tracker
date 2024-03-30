import { useSelector, useDispatch } from 'react-redux';
import { toggleAuth } from '../../redux/auth-test/auth-test-slice.js';

export const AuthTest = () => {
  const isAuthOn = useSelector((state) => state.authTest.auth);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(toggleAuth())}>
          {isAuthOn ? 'Log out' : 'Sign In'}
        </button>
      </div>
    </>
  );
};
