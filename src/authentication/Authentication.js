import { useState } from 'react';
import React  from 'react';
import './Authentication.css';
import Login from './Login';
import Signup from './Signup';

function Authentication  ()  {
    const [active, setActive] = useState("login");

    const handleChange = () => {
        setActive(active === 'login' ? 'signup' : 'login'); //reverse in button bcz while the login page utton will show signup & viseversa
    }
  return (
    <div className='authentication'>
    <div className='auth_left'>
        <img src='https://i.imgur.com/P3Vm1Kq.png' alt='insta_screenshot' />
    </div>
    <div className='auth_right'>
        {active === 'login' ? <Login /> : <Signup />}
       <div className='auth_more'>
        <span>
        {active === 'login' ? (
            <>
            Dont have an accout?
            <button onClick={handleChange}>Signup</button>
            </>
        ) : (
            <>
            Have an accout? <button onClick={handleChange}>Login</button>
            </>
        
           )}
           
        </span>
        </div> 
    </div>
    </div>
  );
}

export default Authentication;
