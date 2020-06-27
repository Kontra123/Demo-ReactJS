import React, { Fragment } from 'react'
import active from '../../../assets/active.svg'
import arrowRight from '../../../assets/arrow-right.svg'
import "./resourceItem.scss";

const ResourceItem = props => {

  const resourceItemClick = () => {
    props.resourceClick(props.resource)
  }

  return (
      <Fragment>
        <li className= {!props.isSelected ? "items-layout" : " items-layout items-layout-selected"} onClick={() => resourceItemClick()}>
          <img src={active} alt="active" style={{paddingTop: 3}} />
          <label className="items-text">{props.resource.name}</label>
          <div className="arrow-right-layout">
            <img src={arrowRight} alt="arrowRight" style={{paddingTop: 3}} />
          </div>
        </li>
        <div className="separator" />

      </Fragment>
  )
}

export default ResourceItem