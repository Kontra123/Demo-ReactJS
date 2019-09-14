import React from 'react'
import "./PermittedActionsContent.css";

const PermittedActionsContent = props => {

    return (
        <div className="permitted-Actions-content-layout">
            <label className="resource-item-content-value-text" >{props.item}</label>
        </div>
    )
}

export default PermittedActionsContent