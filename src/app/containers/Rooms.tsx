import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addRoom, deleteRoom } from '../actions/rooms'
import RoomList from '../components/RoomList'
import { IState, Room } from '../reducers/state'

const mapStateToProps = (state: IState) => ({
    rooms: state.rooms
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSubmit: (room: Room) => dispatch(addRoom(room)),
    onClick: (room: Room) => dispatch(deleteRoom(room))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RoomList)