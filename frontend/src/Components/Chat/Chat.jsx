import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import { db } from '../../firebase';
import firebase from 'firebase'
// import MessageHandler from '../helpers/MessageHandler';

function Chat() {

    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId).collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                )
        }
    }, [channelId])

    const sendMessage = (e) =>{
        e.preventDefault()
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        })
        setInput(' ')
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map(message => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}                  
                    />
                ))}
            </div>
            {/* <MessageHandler/> */}
            <div className="chat__input shadow">
                <AddCircleIcon fontSize="small" />
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder={`Message #${channelName}`}
                    />
                    <button
                        disabled={!channelId}
                        type="submit"
                        className="chat__inputButton"
                        onClick={sendMessage}
                    >Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon  fontSize="large"/>
                    <GifIcon  fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
