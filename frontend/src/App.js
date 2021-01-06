import React, { useEffect } from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Login from './Pages/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import firebase from 'firebase'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Status from './Pages/Status/Status';

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
      } else {
        //user is not logged in
        dispatch(logout())
      }
    })
  }, [dispatch])
  //using bem naming convenstion
  return (
    //using react router  dom for routes
    <BrowserRouter>
      {user ? (
        <div className="App">
          <Switch>
            <Route path='/status' component={Status}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      ) : (<Login />)}
    </BrowserRouter>

  );
}

export default App;
