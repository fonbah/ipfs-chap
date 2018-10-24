import * as React from 'react'
import { Message } from '../reducers/state'

interface IAddMessageListProps {
    onSubmit: (msg: Message) => void
}

const AddMessage = ({ onSubmit }: IAddMessageListProps) => {
    let input: any

    return (
        <div className="form-group layout-block">
            <form
                className="form-inline"
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    onSubmit(input.value)
                    input.value = ''
                }}
            >
                <input className="form-control msg-input" ref={node => input = node} maxLength={200}/>
                <button className="btn btn-success" type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default AddMessage