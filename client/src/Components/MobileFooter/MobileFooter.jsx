import React from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';

import './MobileFooter.css'

function MobileFooter() {
    return (
        <div className="mobilefooter rounded-md bg-gray-800 h-16">
            <Link to='/notifications'>
                <NotificationsIcon className="text-gray-200" />
            </Link>
            <Link to='/chats'>
                <ChatIcon className="text-gray-200" />
            </Link>            
            <Link to='/userhome'>
                <HomeRoundedIcon className="text-gray-200" />
            </Link>
            <Link to='/people'>
                <PeopleAltRoundedIcon className="text-gray-200" />
            </Link>
            
            <Link to='/profile'>
                <SettingsIcon className="text-gray-200" />
            </Link>
        </div>
    )
}

export default MobileFooter
