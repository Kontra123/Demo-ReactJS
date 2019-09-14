import React from 'react'
import "./GeneralDetailsContent.css";

const GeneralDetailsContent = props => {

    return (
        <div className="resource-item-content-layout">
            <label className="resource-item-content-title-text" >{props.title}</label>
            <div className="resource-item-content-value-layout">
                <label className="resource-item-content-value-text" >{props.value}</label>
            </div>
        </div>
    )
}

export default GeneralDetailsContent