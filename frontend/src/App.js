import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BreakpointProvider } from 'react-socks'
import './App.css';
import Login from './Pages/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Home from './Pages/Home';
import Status from './Pages/Status/Status';
import Notifications from './Pages/Notifications/Notifications';
import Sidebar from './Components/Sidebar/Sidebar';
import Channels from './Pages/Channels/Channels';
import MobileChats from './Pages/MobileChats/MobileChats';

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
    <BreakpointProvider>
      <BrowserRouter>
        {user ? (
          <div className="App">
            <Switch>
              <Route path='/mobilechats' component={MobileChats}/>
              <Route path='/status' component={Status} />
              <Route path='/notification' component={Notifications} />
              <Route path='/channels' component={Channels} />
              <Route path='/sidebar' component={Sidebar} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        ) : (<Login />)}
      </BrowserRouter>
    </BreakpointProvider>

  );
}

export default App;
