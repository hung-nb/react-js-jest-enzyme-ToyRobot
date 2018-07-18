import React from 'react'

const ReportField = (props) => {
    return (
        <div>
            <div>Output Report</div>
            <input
                type="text"
                value={props.value}>
            </input>
        </div>
    )
}

export { ReportField };