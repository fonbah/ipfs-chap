import * as React from 'react'
import { Message } from '../reducers/state'

import AddMessage from './AddMessage'

interface IMessageListProps {
    messages: Message[],
    onSubmit: (msg: Message) => void
}

const MessageList = ({ messages, onSubmit }: IMessageListProps) => (
    <div>
        <ul className="list-group">
            {messages.map((message, i) =>
                <li key={i} className="list-group-item">
                    {message}
                </li>
            )}
        </ul>
        <AddMessage onSubmit={onSubmit} />
    </div>
)

export default MessageList