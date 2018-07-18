import React from 'react'

const LogField = (props) => {
    return (
        <div>
            <div>Command History</div>
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