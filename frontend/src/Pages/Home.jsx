import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import Chat from '../Components/Chat/Chat';
import './Home.css'


function Home() {
    return (
        <div className="home">

            <>
                {/* sidebar component */}
                <Sidebar />

                {/* the chat componets */}
                <Chat />

                {/* chat right */}
            </>

        </div>
    )
}

export default Home
