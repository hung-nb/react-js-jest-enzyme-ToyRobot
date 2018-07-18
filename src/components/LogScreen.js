import React from 'react'

const LogScreen = (props) => {
    return (
        <div>
            <div>Command History</div>
            <textarea
                type="text"
                value = {props.value}>
            </textarea>
        </div>
    )
}

export { LogScreen };