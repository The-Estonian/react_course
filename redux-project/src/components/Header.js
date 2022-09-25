import classes from './Header.module.css';
import { authActions } from '../store/redux-logic';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logOut = () => {
    dispatch(authActions.logout());
  };

  const productData = (
    <li>
      <a href='/'>My Products</a>
    </li>
  );
  const salesData = (
    <li>
      <a href='/'>My Sales</a>
    </li>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && productData}
          {isAuthenticated && salesData}
          <li>
            {isAuthenticated ? <button onClick={logOut}>Logout</button> : ""}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
