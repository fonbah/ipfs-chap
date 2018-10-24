import React from 'react'

const RoomList = ({ rooms, onClick, onSubmit }) => (
    <div className="form-group">
        <div className="form-inline">
            <input type="text" className="form-control" maxLength="20"/>
            <button className="btn btn-primary" onClick={onSubmit}>add</button>
        </div>
        <ul className="list-group">
            {rooms.map((room, i) =>
                <li key={i} className="list-group-item">
                    {room.toString()}
                    <a href="#" onClick={onClick}>delete</a>
                </li>
            )}
        </ul>
    </div>
)

export default RoomList