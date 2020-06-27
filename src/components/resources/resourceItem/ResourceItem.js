import React from 'react'
import active from '../../../assets/active.svg'
import arrowRight from '../../../assets/arrow-right.svg'
import "./resourceItem.scss";

const ResourceItem = props => {

  const { resourceClick, resource, isSelected } = props

  const resourceItemClick = () => {
    resourceClick()
  }

  return (
    <li className={`items-layout ${isSelected ? "items-layout-selected" : ""}`}
      onClick={() => resourceItemClick()}>
      <img src={active} alt="active"/>
      <label className="items-text">{resource.name}</label>
      <div className="arrow-right-layout">
        <img src={arrowRight} alt="arrowRight"/>
      </div>
    </li>
  )
}

export default ResourceItem