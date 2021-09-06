import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  const { match } = props;
  return (
    <>
      <p>Nested routing</p>
      <p>About All</p>
      <Link to={`${match.url}/branch1`}>branch 1</Link> 
      <span style={{  padding: '10px'}}></span>
      <Link to={`${match.url}/branch2`}>branch 2</Link>
    </>
  );
};

export default About;
