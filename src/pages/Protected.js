import React from 'react';
import { Link } from 'react-router-dom';

const Protected = (props) => {
  const { match } = props;
  return (
    <>
      <p>Protected routing</p>
      <Link to='/' >home</Link>
    </>
  );
};

export default Protected;
