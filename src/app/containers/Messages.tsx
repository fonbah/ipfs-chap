import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import { addMessage } from '../actions/messages'
import MessageList from '../components/MessageList'
import { IState, Message } from '../reducers/state';

const mapStateToProps = (state: IState) => ({
    messages: state.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSubmit: (msg: Message) => dispatch(addMessage(msg))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageList)