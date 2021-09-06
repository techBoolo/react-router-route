import React from 'react';
import { Link } from 'react-router-dom';
const ContactInfo = (props) => {
  console.log(props);
  const { match } = props;
  return (
    <>
      <p>Contact Person:  { match.params.contact }</p>      
      <Link to='/contact'>main Contact</Link>
    </>
  );
};

export default ContactInfo;
