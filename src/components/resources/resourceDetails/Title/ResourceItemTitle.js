import React from 'react'
import "./resourceItemTitle.scss";
import help from '../../../../assets/help.svg'

const ResourceItemTitle = props => {

    return (
        <div className="resource-item-title-layout">
            <label className="resource-item-title-text" >{props.title}</label>
            <img src={help} alt="help"/>
        </div>
    )
}

export default ResourceItemTitle