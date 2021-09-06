import React from 'react';
import { Link } from 'react-router-dom';

const Branch1 = (props) => {
  return (
    <>
      <p>Branch 1</p>
      <Link to='/about'>back to about</Link>
    </>
  );
};

export default Branch1;
