import { ActionType } from 'typesafe-actions'
import { Message } from '../reducers/state'
import * as MessageActions from '../actions/messages'

export type MessageAction = ActionType<typeof MessageActions>

const messages = (state: Message[] = [], action: MessageAction) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [...state, action.text].slice(-20)
      default:
        return state
    }
  }
  
  export default messages