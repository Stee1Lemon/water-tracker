import { useSelector, useDispatch } from 'react-redux';
import { newTestValue } from '../../redux/test/test-slice.js';

export const Test = () => {
  const testValue = useSelector((state) => state.test.value);
  const dispatch = useDispatch();

  const handleValue = (e) => {
    console.log(e.target.value);
    dispatch(newTestValue(e.target.value));
  };

  return (
    <>
      <div>
        <h4>Test redux</h4>
        <input onChange={handleValue} />
        <p>{testValue}</p>
      </div>
    </>
  );
};

