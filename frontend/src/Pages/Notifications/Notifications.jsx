import React from 'react'
import Notification from '../../Components/Notification/Notification'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Notifications.css'

function Notifications() {
    return (
        <div className="notifications">
             <>
                {/* sidebar component */}
                <Sidebar />

                {/* the chat componets */}
                <Notification />

                {/* chat right */}
            </>
        </div>
    )
}

export default Notifications
