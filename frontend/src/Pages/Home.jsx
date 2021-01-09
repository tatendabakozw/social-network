import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Chat from '../Components/Chat/Chat';
import './Home.css'
import { Breakpoint } from 'react-socks';


function Home() {
    return (
        <div className="home">
            <Breakpoint small down>
                <MobileHome />
            </Breakpoint>
        </div>
    )
}

const MobileHome = () => {
    return (
        <div>
            iam for mobile view
        </div>
    )
}

const DesktopHome = () => {
    return (
        <Breakpoint medium up>
            <div className="desktophome">
                {/* sidebar component */}
                <Sidebar />

                {/* the chat componets */}
                <Chat />

                {/* chat right */}
            </div>
        </Breakpoint>
    )
}

export default Home
