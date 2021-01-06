import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({user, timestamp, message}) {
    return (
        <div className="message">
            <img src={user.photo} alt="profile_pic" style={{width: '3rem', borderRadius: '100%'}} />
            <div className="message__info">
                <h4>{user.displayName}
                    <span className="message__timestamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
