import classes from './ProfileForm.module.css';
import { useRef, useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const [errorMsg, setErrorMsg] = useState();
  const authCtx = useContext(AuthContext);
  const passwordChangeFormHandler = async (e) => {
    e.preventDefault();
    const serverConnection = async () => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD3XJWJabhN7R00WiUJMucxjJNrh02tkRk',
        {
          method: 'post',
          body: JSON.stringify({
            idToken: authCtx.token,
            password: newPasswordRef.current.value,
            returnSecureToken: true,
          }),
          'Content-Type': 'application/json',
        }
      );
      if (!response.ok) {
        throw new Error('Password not set, connection to server lost!');
      } else {
        const data = await response.json();
        authCtx.login(data.idToken);
        authCtx.logout();
      }
    };
    try {
      await serverConnection();
    } catch (err) {
      console.log(err.message);
      setErrorMsg(err.message);
    }
  };
  return (
    <form className={classes.form} onSubmit={passwordChangeFormHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </form>
  );
};

export default ProfileForm;
