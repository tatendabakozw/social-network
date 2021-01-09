import React from "react";
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import logo from '../../Images/logo.png'
import { useStateValue } from "../../Context/StateProvider";
import Popper from "popper.js";
import axios from "axios";


export default function Navbar({ fixed }) {
    const [{ user }] = useStateValue()
    // console.log(JSON.parse(user).user_id)
    return (
        <>
            {user ? (<AuthenticatedNabar />) : (<UnAuthenticatedNavbar />)}
        </>
    );
}

const UnAuthenticatedNavbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex sticky top-0 flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/'
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        href="#pablo"
                    >
                        <img src={logo} alt="logo" className="w-16" />
                    </Link>
                    <button
                        className="text-white cursor-pointer rounded-full text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <MenuIcon className="rounded-full" />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link to='/login'
                                className="p-2 flex items-center bg-yellow-500 rounded font-bold text-white ml-1 hover:bg-gray-800 m-1"
                                href="#pablo"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register'
                                className="p-2 flex items-center bg-indigo-500 rounded font-bold text-white ml-1 hover:bg-gray-800 m-1"
                                href="#pablo"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const AuthenticatedNabar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="flex z-100 sticky top-0 shadow flex-wrap md:sticky items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/'
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                        href="#pablo"
                    >
                        <img src={logo} alt="logo" className="w-16" />
                    </Link>
                    <button
                        className="text-white cursor-pointer rounded-full text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <MenuIcon className="rounded-full" />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <SearchBar />
                        </li>
                        <li className="nav-item">
                            <HeaderIcon icon={<AddIcon />} />
                        </li>
                        <li className="nav-item">
                            <HeaderIcon icon={<ChatIcon />} />
                        </li>
                        <li className="nav-item">
                            <HeaderIcon icon={<NotificationsSharpIcon />} />
                        </li>                        
                        <li className="nav-item">
                            <Dropdown color="white" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const SearchBar = () => {
    return (
        <>
            <a
                className="px-3 py-2 flex items-center bg-gray-700 rounded-full"
                href="#pablo"
            >
                <input type="text" className="bg-transparent text-white placeholder-white::placeholder outline-none border-none mr-1 " placeholder="Search" />
                <SearchRoundedIcon className="text-gray-300" />
            </a>
        </>
    )
}

const HeaderIcon = ({ icon }) => {
    return (
        <a
            className="p-2 flex items-center bg-gray-700 w-10 rounded-full font-bold text-white ml-1 hover:bg-gray-600"
            href="#pablo"
        >
            {icon}
        </a>
    )
}


//user icon with drop down for account and logout
const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  //setting user ro null on logout
  const [{user},dispatch] = useStateValue()
  const logout = (e) =>{
    e.preventDefault()
    dispatch({
        type: 'SET_USER',
        user: null
    })
    axios.post('http://localhost:8080/api/v1/logout',{email:JSON.parse(user).email}).then(function (response) {               
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.message);
    });
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  } 

  return (
    <>
      <div className="sticky top-0 flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <span
                className="p-2 flex items-center bg-gray-700 rounded-full font-bold text-white ml-1 hover:bg-gray-600"
                style={{ transition: "all .15s ease" }}
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                    dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
            >
                <AccountCircleSharpIcon />
                <MenuIcon className="text-gray-300" />
            </span>
            <div
              ref={popoverDropdownRef}
              className={(dropdownPopoverShow ? "block " : "hidden ")+"text-base z-50 bg-gray-700 mr-8 text-white float-left py-2 list-none text-left rounded shadow-lg mt-1"}
              style={{minWidth:'8rem'}}
            >
              <Link to='/userhome'
                className="text-sm flex align-center py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-600"               
              >
                  <AccountCircleSharpIcon/>
                    {JSON.parse(user).username}
              </Link>
              <Link to='/chats'
                className="text-sm py-2 px-4 flex align-center font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-600"
              >
                <HelpIcon/>  
                Help
              </Link>
              <Link to='/settings'
                className="text-sm py-2 px-4 flex align-center font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-600"
              >
                <SettingsIcon/>
                Settings
              </Link>
              <div className="h-0 my-2 border flex align-center border-solid border-t-0 border-gray-900 opacity-25 hover:bg-gray-600" />
              <span
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-600"                
                onClick={logout}
              >
                <ExitToAppIcon/>
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default function DropdownRender() {
//   return (
//     <>
//       <Dropdown color="white" />
//     </>
//   );
// }