import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'
import './Notifications.css'

function Notifications() {
    return (
        <div className="notifications w-full">
            <div className="notifications__desktop">
                desktop
            </div>
            <div className="notifications__mobile">
                <NotificationsMobile/>
            </div>
        </div>
    )
}

//on mobile display
const NotificationsMobile = () =>{
    return(
        <div className="notificationsmobile flex flex-col bg-gray-700">
            <div className="notificationsmobile__body min-h-screen">
                all notifications go here
            </div>
            <div className="notificationsmobile__footer sticky bottom-0 left-0">
                <MobileFooter/>
            </div>
        </div>
    )
}

export default Notifications
