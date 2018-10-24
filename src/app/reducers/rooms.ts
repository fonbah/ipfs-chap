import { ActionType } from 'typesafe-actions'
import { Room } from '../reducers/state'
import * as RoomActions from '../actions/rooms'

export type RoomAction = ActionType<typeof RoomActions>

const rooms = (state: Room[] = [], action: RoomAction) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return [...state, action.room]
    case 'DELETE_ROOM':
      return state.filter(room => (room !== action.room))
    default:
      return state
  }
}

export default rooms