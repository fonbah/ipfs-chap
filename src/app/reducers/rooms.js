const rooms = (state = [], action) => {
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