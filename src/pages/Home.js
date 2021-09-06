import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {

  return (
    <>
      <p>home</p> 
      <Link to='/protected'>Protected</Link>
    </>
  );
};
export default Home;
