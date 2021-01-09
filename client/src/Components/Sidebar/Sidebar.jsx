import React from 'react'
import './Sidebar.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Sidebar() {
    return (
        <div className="sidebar bg-gray-800 min-h-screen">
            <div className="sidebar__channels flex text-center items-center border-2 border-gray-900 h-12 w-full">
                <KeyboardArrowDownIcon/>
                <p>channels</p>
            </div>
        </div>
    )
}

export default Sidebar
