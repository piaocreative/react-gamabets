import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/stores/counter";
const Counter = () => {
  const dispatch = useDispatch();
  const counterStore = useSelector((state) => state.counter);
  return (
    <div>
      <p>Count: {counterStore.count}</p>
      <button onClick={(e) => dispatch(actionCreators.increment())}>
        Increment
      </button>
    </div>
  );
};
export default Counter;
