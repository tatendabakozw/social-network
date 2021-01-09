import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useStateValue } from './Context/StateProvider';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Help from './Pages/Help/Help';
import Settings from './Pages/Settings/Settings';
import PrivateRoute from './HOC/PrivateRoute';
import Start from './Pages/Start/Start';
import Profile from './Pages/Profile/Profile';
import UserHome from './Pages/UserHome/UserHome';
import Chats from './Pages/Chats/Chats';
import Notifications from './Components/Notifications/Notifications';
import People from './Pages/People/People';

function App() {

  // eslint-disable-next-line
  const [{ }, dispatch] = useStateValue()

  //to see if user is already logged in or not
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    // console.log(JSON.parse(loggedInUser))
    if (loggedInUser) {
      dispatch({
        type: 'SET_USER',
        user: loggedInUser
      })
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  }, [dispatch])

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <PrivateRoute path='/people' component={People} />
            <PrivateRoute path='/notifications' component={Notifications} />
            <PrivateRoute path='/chats' component={Chats} />
            <PrivateRoute path='/settings' component={Settings} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/userhome' component={UserHome}/> 
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Start} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
