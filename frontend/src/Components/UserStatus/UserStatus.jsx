import React from 'react'
import { useSelector } from 'react-redux'
import { selectChannelName } from '../../features/appSlice'
import ChatHeader from '../ChatHeader/ChatHeader'
import './UserStatus.css'

function UserStatus() {
    const channelName = useSelector(selectChannelName)
    return (
        <div className="userstatus">
            <ChatHeader channelName={channelName} />
            my friend is online
        </div>
    )
}

export default UserStatus
