import { useSelector, useDispatch } from 'react-redux';
// import { toggleAuth } from '../../redux/auth-test/auth-test-slice.js';
import { selectError, selectIsLoading } from '../../redux/root/rootSelectors.js';
import authApi from '../../redux/auth/authOperations.js';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader.jsx';
import waterApi from '../../redux/water/waterOperations.js';

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

    const handleDispatch = async (rout) => {
    console.log('handle dispatch');
    const result = await dispatch(rout);
    return console.log(result);
  };

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

                <button onClick={() => { handleDispatch(authApi.getUserThunk()) }}>
          Get User Current
        </button>

        <button onClick={() => {
          handleDispatch(authApi.waterRateThunk({
            waterRate: 2000,
            date: '03/04/2024',
          }))
        }}>
          Patch WaterRate
        </button>

        <button onClick={() => {
          handleDispatch(waterApi.addWaterThunk({
            date: '06/04/2024',
            time: '21:33',
            waterAmount: 500,
          }))  
        }}>
          Post Water Amount
        </button>

        <button onClick={() => {
          handleDispatch(waterApi.deleteWaterThunk({
            id: '6611c19e1c62d9d4097991de'
          }))  
        }}>
          Delete Water Amount
        </button>

        <button onClick={() => {
          handleDispatch(waterApi.editWaterThunk({
            id: '6611c08f1c62d9d40979915d',
            time: '22:00',
            waterAmount: 800,
          }))  
        }}>
          Edit Water Amount
        </button>
        
        <button onClick={() => {
          handleDispatch(waterApi.getTodayWaterThunk({date: '02/04/2024'}))  
        }}>
          Post Today Water
        </button>

        <button onClick={() => {
          handleDispatch(waterApi.getMonthWaterThunk({date: '04/2024'}))  
        }}>
          Post Month Water
        </button>
      </div>
    </>
  );
};
