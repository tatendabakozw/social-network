import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'
import { useStateValue } from '../../Context/StateProvider'
import './Profile.css'

function Profile() {

    return (
        <div className="profile w-full">
            <div className="profile__desktop">
                desktop
            </div>
            <div className="profile__mobile">
                <ProfileMobile/>
            </div>
        </div>
    )
}

//on mobile display
const ProfileMobile = () =>{
    const [{user}] = useStateValue()
    return(
        <div className="profilemobile flex flex-col bg-gray-700">
            <div className="profilemobile__body min-h-screen">
                all profiles go here
            </div>
            <div className="profilemobile__footer sticky bottom-0 left-0">
                <MobileFooter/>
            </div>
        </div>
    )
}

export default Profile
