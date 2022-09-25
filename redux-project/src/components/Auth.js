import classes from './Auth.module.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/redux-logic';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const emailInput = useRef();
  const passwordInput = useRef();

  const loginFormHandler = (e) => {
    console.log('submitting');
    e.preventDefault();
    console.log(emailInput.current.value.length > 5);
    console.log(passwordInput.current.value.length > 5);
    console.log(isAuthenticated);
    if (
      emailInput.current.value.length > 5 &&
      passwordInput.current.value.length > 5
    ) {
      console.log("dispatching");
      dispatch(authActions.login());
    }
  };

  const loginScreen = (
    <section>
      <form onSubmit={loginFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input ref={emailInput} type='email' id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input ref={passwordInput} type='password' id='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </section>
  );

  return (
    <main className={classes.auth}>{!isAuthenticated ? loginScreen : <p>You are logged in!</p>}</main>
  );
};

export default Auth;
