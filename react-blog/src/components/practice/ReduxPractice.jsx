
import { useSelector, useDispatch } from 'react-redux';
import { decreament, increament } from './features/counters/CounterSlice';

// ReduxPractice component demonstrates Redux state usage in React
const ReduxPractice = () => {
  // useSelector reads the counter value from Redux store
  const count = useSelector((state) => state.counter.value);
  // useDispatch gives you the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux First App</h1>
      <table className="isTable">
        <tbody>
          <tr>
            <td>
              {/* Dispatch the increment action when button is clicked */}
              <button className='btn btn-info' onClick={() => dispatch(increament())}>
                <strong>++Increment</strong>
              </button>
            </td>
            <td>
              {/* Show the current count from Redux state */}
              <strong>{count}</strong>
            </td>
            <td>
              {/* Dispatch the decrement action when button is clicked */}
              <button className='btn btn-info' onClick={() => dispatch(decreament())}>
                <strong>--Decrement</strong>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReduxPractice;

