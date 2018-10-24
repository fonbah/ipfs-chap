import * as React from 'react'
import RoomList from '../containers/Rooms'
import MessageList from '../containers/Messages'

const ChatWindow = () => (
    <div>
        <h3 className="layout-block">Rooms</h3>
        <RoomList />

        <h3 className="layout-block">Messages</h3>
        <MessageList />
    </div>
)

export default ChatWindow