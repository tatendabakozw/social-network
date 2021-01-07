import React from 'react'
import { useSelector } from 'react-redux'
import { selectChannelName } from '../../features/appSlice'
import ChatHeader from '../ChatHeader/ChatHeader'
import './Notification.css'

function Notification() {
    const channelName = useSelector(selectChannelName)

    return (
        <div className="notification">
            <ChatHeader channelName={channelName} />
            Your Notifications go here
        </div>
    )
}

export default Notification
