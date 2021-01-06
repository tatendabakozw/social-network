import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import {Link} from 'react-router-dom'

function ChatHeader({ channelName }) {
    return (
        <div className="chatheader shadow">
            <div className="chatheader__left">
                <h3><span className="chatheader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon fontSize="large" />
                <EditLocationRoundedIcon fontSize="large" />
                <Link to='/status'>
                    <PeopleAltRoundedIcon/>
                </Link>
                <div className="chatheader__search">
                    <input
                        type="text"
                        placeholder="Search"
                    />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon fontSize="large" />
                <HelpRoundedIcon fontSize="large" style={{ color: '#4fb185' }} />
            </div>
        </div>
    )
}


export default ChatHeader
