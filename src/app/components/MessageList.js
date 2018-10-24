import React from 'react'

const MessageList = ({ messages }) => (
    <ul className="list-group">
        {messages.map((message, i) =>
            <li key={i} className="list-group-item">
                {message}
            </li>
        )}
    </ul>
)

export default MessageList