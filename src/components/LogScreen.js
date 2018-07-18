import React from 'react'

const LogScreen = (props) => {
    return (
        <div>
            <div>Logs</div>
            <input
                type="text"
                value = {props.value}>
            </input>
        </div>
    )
}

export { LogScreen };