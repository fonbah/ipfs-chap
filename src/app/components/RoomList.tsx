import * as React from 'react'
import { Room } from '../reducers/state'

interface IRoomListProps {
    rooms: Room[],
    onClick: (room: Room) => void,
    onSubmit: (room: Room) => void
  }

const RoomList = ({ rooms, onClick, onSubmit }: IRoomListProps) => (
    <div className="form-group">
        <div className="form-inline">
            <button className="btn btn-primary" onClick={() => onSubmit('Room-' + Date.now() + Math.random())}>add</button>
        </div>
        <ul className="list-group layout-block">
            {rooms.map((room, i) =>
                <li key={i} className="list-group-item">
                    {room.toString()}
                    <button className="float-right btn btn-outline-danger btn-sm" onClick={() => onClick(room.toString())}>delete</button>
                </li>
            )}
        </ul>
    </div>
)

export default RoomList