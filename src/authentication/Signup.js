import React, {useState} from 'react';
import './Signup.css';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile
} from 'firebase/auth';
import { auth } from "../firebase";

function Signup  ()  {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {
          displayName: username,
        })
      );
    })
    .catch((err) => {
      alert(err);
    });

  };

  return (
    <div className='signup'>
         <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' />
        <input 
        onChange={(e) => setEmail(e.target.value)}
        type='email' 
        placeholder='email'
        value={email}
         />
        <input 
        onChange={(e) => setUsername(e.target.value)} 
        type='text'
        placeholder='username'
        value={username}
         />
        <input 
         onChange={(e) => setPassword(e.target.value)} 
        type='password' 
        placeholder='password'
        value={password}
        />
        <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default Signup
