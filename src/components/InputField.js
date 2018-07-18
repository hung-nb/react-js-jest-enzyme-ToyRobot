import React from 'react'

const InputField = (props) => {
    return (
        <div>
            <div>Input Commands</div>
            <input
                className="input"
                type="text"
                placeholder = "Enter a command:"
                onChange = {props.onChange}
                onKeyPress={props.onKeyPress}
                value={props.value}>
            </input>
        </div>
    )
}

export { InputField };