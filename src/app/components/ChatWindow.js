import React from 'react'
import RoomList from '../containers/Rooms'
import MessageList from '../containers/Messages'
import AddMessage from '../containers/AddMessage'

const ChatWindow = () => (
    <div>
        <h3>Rooms</h3>
        <RoomList />

        <h3>Messages</h3>
        <MessageList />
        <AddMessage />
    </div>
)

export default ChatWindow