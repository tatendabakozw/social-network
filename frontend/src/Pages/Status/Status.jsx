import React from 'react'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Components/Sidebar/Sidebar'
import UserStatus from '../../Components/UserStatus/UserStatus'
import './Status.css'

function Status() {
    return (
        <div className="status">
             <>
                {/* sidebar component */}
                <Sidebar />

                {/* the chat componets */}
                <UserStatus />

                {/* chat right */}
            </>
        </div>
    )
}

export default Status
