import React from 'react'

const LogField = (props) => {
    return (
        <div>
            <div>Input History</div>
            <textarea
                readOnly
                className='textArea'
                type="text"
                value = {props.value}>
            </textarea>
        </div>
    )
}

export { LogField };