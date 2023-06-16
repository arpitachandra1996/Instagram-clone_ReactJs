import React, { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import Authentication from './authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLoading } from './features/userSlice';
import { auth } from "./firebase";

function App  ()  {
   const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch (
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log('User is not logged in');
      }
    });
  }, []);


  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading)
  console.log(auth.currentUser);
  return (
    <div className='app'>
      {isLoading ? (<div className="loader">
      <div className="loader-spinner"></div>
    </div>) : ( <>{user ? <Homepage /> : <Authentication />}</>

  )} 
    




     
    </div>
  );
};

export default App;


