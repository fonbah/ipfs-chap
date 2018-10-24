export type Message = string

export type Room = string

export interface IState {
  rooms: Room[];
  messages: Message[];
}