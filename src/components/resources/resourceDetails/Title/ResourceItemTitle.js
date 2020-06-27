import React from 'react'
import "./resourceItemTitle.scss";
import help from '../../../../assets/help-12.svg'

const ResourceItemTitle = props => {

    return (
        <div className="resource-item-title-layout">
            <label className="resource-item-title-text" >{props.title}</label>
            <img src={help} alt="help" style={{ paddingTop: 2 }} />
        </div>
    )
}

export default ResourceItemTitle