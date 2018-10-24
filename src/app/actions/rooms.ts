
export const addRoom = (room: string) => ({
  type: 'ADD_ROOM',
  room
})

export const deleteRoom = (room: string) => ({
  type: 'DELETE_ROOM',
  room
})