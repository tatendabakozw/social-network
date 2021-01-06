import React, { useEffect } from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Login from './Pages/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout,selectUser } from './features/userSlice';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import firebase  from 'firebase'
// import cookies from 'js-cookies'

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  //auth using fireabse
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is ', authUser)
      if (authUser) {
        //user is logged in
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email, 
          displayName: authUser.displayName
        })
        );
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          // ...
        }).catch(function(error) {
          console.log(error.message)
        });
      } else {
        //user is not logged in
        dispatch(logout())
      }
    })
  },[dispatch])
  //using bem naming convenstion
  return (
    //using react router  dom for routes
    <div className="App">
      {user? (
        <>
            {/* sidebar component */}
            <Sidebar />

            {/* the chat componets */}
            <Chat />
        </>
      ):(<Login/>)}
    </div>

  );
}

export default App;
