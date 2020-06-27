import React from 'react'
import "./generalDetailsContent.scss";

const GeneralDetailsContent = props => {

    const {title, value} = props

    return (
        <div className="resource-item-content-layout">
            <label className="resource-item-content-title-text">{title}</label>
            <div className="resource-item-content-value-layout">
                <label className="resource-item-content-value-text" >{value}</label>
            </div>
        </div>
    )
}

export default GeneralDetailsContent