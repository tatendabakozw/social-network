import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom'
import { Breakpoint } from 'react-socks';

function ChatHeader({ channelName }) {
    return (
        <div className="chatheader shadow pr-1">
            <div className="chatheader__left">
                <h3><span className="chatheader__hash">#</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatheader__right">
                <Link to='/notification' className="hover:text-white">
                    <NotificationsIcon />
                </Link>
                <Link to='/' className="hover:text-white">
                    <ChatIcon />
                </Link>
                <Link to='/status' className="hover:text-white">
                    <PeopleAltRoundedIcon />
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
            <Breakpoint small down>
                <div className="mobile__header">
                    <div className="mobile__chatsearch">
                        <input
                            type="text"
                            placeholder="Search"
                        />
                        <SearchRoundedIcon />
                    </div>
                    <SendRoundedIcon fontSize="large" />
                </div>
            </Breakpoint>
        </div>
    )
}


export default ChatHeader
