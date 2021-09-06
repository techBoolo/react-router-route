import React from 'react';
import { Link } from 'react-router-dom';

const Branch2 = (props) => {
  return (
    <>
      <p>Branch 2</p>
      <Link to='/about'>back to about</Link>
    </>
  );
};

export default Branch2;
