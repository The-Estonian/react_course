import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error ocurred</h1>
        <p>{error.message}</p>
        <p>Error code: {error.status}</p>
      </main>
    </>
  );
};

export default ErrorPage;
