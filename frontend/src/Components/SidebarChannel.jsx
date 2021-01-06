import React from 'react'
import { useDispatch } from 'react-redux'
import './SidebarChannel.css'
import {setChannelInfo} from '../features/appSlice'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch() 

    return (
        <div className="sidebarChannel" 
                onClick={() => 
                    dispatch(
                        setChannelInfo({
                            channelId: id,
                            channelName: channelName
                        }))}>
            <h5>
                <span className="sidebarChannel__hash">#</span>
                {channelName}
            </h5>
            <div className="sidebarchannel__spacer"></div>
            <EditIcon fontSize="small" style={{color:'#60A5FA'}} />
            <DeleteForeverIcon fontSize="small" style={{color:'#DB2777'}}/>
        </div>
    )
}

export default SidebarChannel
