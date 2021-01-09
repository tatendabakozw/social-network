import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'
import './People.css'

function People() {
    return (
        <div className="people w-full">
            <div className="people__desktop">
                desktop
            </div>
            <div className="people__mobile">
                <PeopleMobile/>
            </div>
        </div>
    )
}

//on mobile display
const PeopleMobile = () =>{
    return(
        <div className="peoplemobile flex flex-col bg-gray-700">
            <div className="peoplemobile__body min-h-screen">
                all people go here
            </div>
            <div className="peoplemobile__footer sticky bottom-0 left-0">
                <MobileFooter/>
            </div>
        </div>
    )
}

export default People
