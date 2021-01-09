import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'
import './Chats.css'

function Chats() {
    return (
        <div className="chats w-full">
            <div className="chats__desktop">
                desktop
            </div>
            <div className="chats__mobile">
                <ChatsMobile/>
            </div>
        </div>
    )
}

//on mobile display
const ChatsMobile = () =>{
    return(
        <div className="chatsmobile flex flex-col bg-gray-700">
            <div className="chatsmobile__body min-h-screen">
                allchats go here
            </div>
            <div className="chatsmobile__footer sticky bottom-0 left-0">
                <MobileFooter/>
            </div>
        </div>
    )
}

export default Chats
