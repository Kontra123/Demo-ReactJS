import React, { useState } from 'react';
import "./resourceItemTitle.scss";
import help from '../../../../assets/help.svg'

const ResourceItemTitle = props => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    return (
        <div className="resource-item-title-layout">
            <label className="resource-item-title-text" >{props.title}</label>
            <div className="img-view">
                <img src={help} alt="help" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} />
                {isHover && <span>{props.title}</span>}
            </div>
        </div>
    )
}

export default ResourceItemTitle