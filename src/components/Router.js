import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Branch1 from '../pages/Branch1';
import Branch2 from '../pages/Branch2';
import Contact from '../pages/Contact';
import ContactInfo from '../pages/ContactInfo';
import Protected from '../pages/Protected';
import Home from '../pages/Home';
import Appbar from './Appbar';
import Footer from './Footer';

const Router = () => {
  const currentUser = null
  return (
      <>
        <Route children={(props) => <Appbar {...props} /> } />
        <Route exact path='/' component={Home} />    
        <Route exact path='/about' component={About} />    
        <Route exact path='/about/branch1' component={Branch1} />    
        <Route exact path='/about/branch2' component={Branch2} />    
        <Route exact path='/contact' component={Contact} />    
        <Route exact path='/contact/:contact' component={ContactInfo} />    
        <Switch>
          <Route path='/protected'
            render={(props) => 
              currentUser
                ? (<Protected />)
                : (<Redirect to={{ pathname: '/login', state: { from: props.location}}} />)
            }
          />
        </Switch>
        <Route children={(props) => <Footer />} />    
      </>
  );
};
export default Router;
