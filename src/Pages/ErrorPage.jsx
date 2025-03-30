import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError();
      console.log(error);
  return (
  <>
  <h1>Opps! An error occured.</h1>
  {error && <p>{error.data}</p>}
  <NavLink to="/"><button>Go Home</button></NavLink>
  </>
);
}

export default ErrorPage
