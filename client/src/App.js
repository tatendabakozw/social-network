import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useStateValue } from './Context/StateProvider';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import Help from './Pages/Help/Help';
import Settings from './Pages/Settings/Settings';
import PrivateRoute from './HOC/PrivateRoute';

function App() {

  const [{},dispatch] = useStateValue()

  //to see if user is already logged in or not
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('user')
    // console.log(JSON.parse(loggedInUser))
    if(loggedInUser){
      dispatch({
        type: 'SET_USER',
        user: loggedInUser
      })
    }else{
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>      
          <PrivateRoute path='/help' component={Help}/>
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/settings' component={Settings} />    
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login}/>          
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
