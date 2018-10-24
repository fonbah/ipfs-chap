import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/messages'

const AddMessage = ({ dispatch }) => {
    let input

    return (
        <div className="form-group">
            <form
                className="form-inline"
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addMessage(input.value))
                    input.value = ''
                }}
            >
                <input className="form-control" ref={node => input = node} />
                <button className="btn btn-success" type="submit">
                    Send
        </button>
            </form>
        </div>
    )
}

export default connect()(AddMessage)