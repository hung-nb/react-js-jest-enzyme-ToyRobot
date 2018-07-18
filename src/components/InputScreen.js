import React from 'react'

const InputScreen = (props) => {
    return (
        <div>
            <div>Input Commands</div>
            <input 
                type="text"
                placeholder = "Enter a command:"
                onChange = {props.onChange}
                onKeyPress={props.onKeyPress}
                value={props.value}>
            </input>
        </div>
    )
}

export { InputScreen };