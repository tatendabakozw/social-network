import React,{useEffect, useState} from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {auth, db} from '../firebase'

function Sidebar() {

    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot =>{
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data() 
            })))
        })
    },[])

    const addChannel = () =>{
        const channelName = prompt('Enter a new Channel name');

        if(channelName){
            db.collection('channels').add({
                channelName: channelName,
            });
            
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Bako's App</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h5>Channels</h5>
                    </div>
                    <AddIcon onClick={addChannel} className="sidebar__addChannels" />
                </div>
                <div className="sidebar__channelslist">
                    {channels.map(({id, channel}) =>(
                        <SidebarChannel 
                            key={id} 
                            id={id} 
                            channelName={channel.channelName} 
                        />
                    ))}
                </div>
            </div>
            {/* <div className="sidebar__voice">
                <SignalCellularAltIcon 
                    className="sidebar__voiceIcon"
                    fontSize="small"
                />
                <div className="sidebar__voiceInfo">
                    <h4>Voice Connected</h4>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon fontSize="small"/>
                    <CallIcon fontSize="small"/>
                </div>
            </div> */}
            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} fontSize="small" />
                <div className="sidebar__profileInfo">
                    <p style={{fontWeight:'bold', color: 'gray'}}>{user.displayName}</p>
                    <p>#{user.uid.substring(0,5 )}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon fontSize="small"/>
                    <HeadsetIcon fontSize="small"/>
                    <SettingsIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
