import React from 'react';
import { Link } from 'react-router-dom';
const Contact = (props) => {
  console.log(props);
  const { match } = props;
  return (
    <>
      <p>Dynamic routing</p>
      <p>Contact</p>      
      <Link to={`${match.url}/contact1`}>Contact 1</Link>
      <span style={{  padding: '10px'}}></span>
      <Link to={`${match.url}/contact2`}>Contact 2</Link>
    </>
  );
};

export default Contact;
