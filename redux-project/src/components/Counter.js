import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/redux-logic';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);
  const amount = useRef();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(parseInt(amount.current.value)));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <div>
          <button onClick={increaseHandler}>Increment by:</button>
          <input type='number' ref={amount}></input>
        </div>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
