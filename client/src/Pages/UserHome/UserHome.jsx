import React from 'react'
import MobileFooter from '../../Components/MobileFooter/MobileFooter'
import './UserHome.css'
import games from '../../Images/games.jpg'
import techniology from '../../Images/technology.jpg'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ContactsIcon from '@material-ui/icons/Contacts';
import Sidebar from '../../Components/Sidebar/Sidebar'


function UserHome() {
    return (
        <div className="userhome">
            <div className="userhome__desktop">
                <DesktopHome/>
            </div>
            <div className="userhome__mobile">
                <UserHomeMobile />
            </div>
        </div>
    )
}

//on mobile display
//component to render when view when on mobile
const UserHomeMobile = () => {
    return (
        <div className="userhomemobile flex flex-col bg-gray-700">
            <div className="userhomemobile__body flex flex-col min-h-screen p-3">
                <div className="mobilehome__search flex self-center mb-8 mt-4 p-2 bg-gray-800 rounded-md items-center w-5/6">
                    <SearchRoundedIcon className="m-2 text-gray-200" />
                    <input type="text" placeholder="Search Favourites" className="w-full p-2 rounded-md bg-transparent outline-none border-none" />
                </div>
                <div className="mobile__homeChannels flex flex-col">
                    <span className="flex justify-between text-sm mb-4 text-gray-200 text-left" >
                        <p>Popular Channels</p>
                        <p className="text-yellow-700">See All</p>
                    </span>
                    <div className="homehome__channelsContainer mb-8 flex flex-coll">
                        <HomeChannel picture={games} />
                        <HomeChannel picture={techniology} />
                        <HomeChannel picture={games} />
                    </div>
                </div>
                <div className="homehome__Catalougue">
                    <span className="flex justify-between text-sm mb-4 text-gray-200 text-left" >
                        <p>Popular Catalogues</p>
                        <p className="text-yellow-700">See All</p>
                    </span>
                    <div className="homehome__cataloguesContainer p-1">
                        <HomeCatalogues />
                        <HomeCatalogues />
                        <HomeCatalogues />
                        <HomeCatalogues />
                    </div>
                </div>
            </div>
            <div className="userhomemobile__footer sticky bottom-0 left-0">
                <MobileFooter />
            </div>
        </div>
    )
}

//home catalogues
//component showing all catalogues when on mobile
const HomeCatalogues = () => {
    return (
        <div className="home__catalogues flex mb-4 py-2">
            <div className="catalogue__image w-38 overflow-hidden">
                <img src={games} alt="game__image" style={{ width: '8rem' }} />
            </div>
            <div className="catalogues__description py-2 px-2 flex flex-col text-gray-200 justify-between">
                <p className="font-bold">Gamers World</p>
                <p>We sell cheap games and consoles on the go</p>
                <span className="flex">
                    <ContactsIcon fontSize="small" />
                    <p>+263771445411</p>
                </span>
            </div>
        </div>
    )
}


//home first row component
//component showing featured channels when on mobile
const HomeChannel = ({ picture }) => {
    return (
        <div className="homechannel w-32 my-2 mx-3 rounded-md h-38 flex items-center overflow-hidden bg-gray-300 ">
            <img src={picture} alt="games" className="rounded-md self-center" style={{ width: '15rem' }} />
            <p>Gamers World</p>
        </div>
    )
}

//component rendering the desktop view
//to show only on dektop
//has a sidebar component
const DesktopHome = () =>{
    return(
        <div className="desktophome flex">
            <div className="desktophome__sidebar">
                <Sidebar/>
            </div>
            <div className="desktophome__body w-full">
                body
            </div>
        </div>
    )
}

export default UserHome
