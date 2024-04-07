import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import authApi from '../../redux/auth/authOperations';
import waterApi from '../../redux/water/waterOperations';
import { useState } from 'react';

const RoutsTest = () => {
  const [avatar, setAvatar] = useState();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectAuthUser);

  const handleDispatch = async (rout) => {
    console.log('handle dispatch');
    const result = await dispatch(rout);
    return console.log(result);
  };

  const handleAvatar = async (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <h3>Routs test</h3>
      <ul>
        <li>
          <button onClick={() => console.log(userInfo)}>
            Log user info from redux <b>Works</b>
          </button>
        </li>
        <li>
          <input type="file" onChange={handleAvatar} />
          <button
            onClick={() => handleDispatch(authApi.updateAvatarThunk(avatar))}
          >
            PATCH/api/user/avatars <b>Works</b>
          </button>
        </li>
        <li>
          <button onClick={() => handleDispatch(authApi.getUserThunk())}>
            GET/api/user/current <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              dispatch(
                authApi.editUserInfoThunk({
                  name: 'Rename',
                  email: 'newemail@mail.com',
                  outdatedPassword: 'old password',
                  password: 'new password',
                  gender: 'male',
                })
              )
            }
          >
            PUT/api/user/current <b>Works</b>
          </button>
        </li>
        <li>
          <button>DELETE/api/user</button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(
                authApi.waterRateThunk({
                  waterRate: 2000,
                  date: '06/04/2024',
                })
              )
            }
          >
            PATCH/api/waters/water_rate <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(
                waterApi.addWaterThunk({
                  date: '06/04/2024',
                  time: '11:45',
                  waterAmount: 200,
                })
              )
            }
          >
            POST/api/waters <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(
                waterApi.editWaterThunk({
                  id: '661160a93117903c8c92788f',
                  time: '12:35',
                  waterAmount: '150',
                })
              )
            }
          >
            PUT/api/waters/id <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(
                waterApi.deleteWaterThunk({ id: '661171653117903c8c928aef' })
              )
            }
          >
            DELETE/api/waters/id <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(waterApi.getMonthWaterThunk({ date: '04/2024' }))
            }
          >
            GET/api/waters/per_month <b>Works</b>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              handleDispatch(
                waterApi.getTodayWaterThunk({ date: '07/04/2024' })
              )
            }
          >
            GET/api/waters/today <b>Works</b>
          </button>
        </li>
      </ul>
    </>
  );
};

export default RoutsTest;
