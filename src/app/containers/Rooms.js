import { connect } from 'react-redux'
import { addRoom, deleteRoom } from '../actions/rooms'
import RoomList from '../components/RoomList'

const mapStateToProps = state => ({
    rooms: state.rooms
})

const mapDispatchToProps = dispatch => ({
    onSubmit: room => dispatch(addRoom(room)),
    onClick: room => dispatch(deleteRoom(room))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RoomList)