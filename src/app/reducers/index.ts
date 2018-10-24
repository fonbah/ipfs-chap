import { combineReducers } from 'redux'

import rooms from './rooms'
import messages from './messages'
import { IState } from './state';

export default combineReducers<IState>({
    rooms,
    messages
})
