import React from 'react'
import "./resourceDetails.scss";
import GeneralDetails from './GeneralDetails/GeneralDetails';
import PermittedActions from './PermittedActions/PermittedActions'
import MyContext from '../../../context/MyContext'


const ResourceDetails = props => {

  return (
    <MyContext.Consumer>
      {context => (
        <div className="main-resource-item-layout">
          <div className="resource-item-layout">
            <div className="resource-item-header">
              <label className="resource-text-header">{context.currentResource && context.currentResource.name}</label>
            </div>
            <div className="resource-content-wrapper">
              <GeneralDetails title={'GENERAL DETAILS'} />
              <PermittedActions actionsArray={props.actionsArray} title={'PERMITTED ACTIONS'} />
            </div>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default ResourceDetails