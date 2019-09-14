import React from 'react'
import "./ResourceDetails.css";
import GeneralDetails from './GeneralDetails/GeneralDetails';
import PermittedActions from './PermittedActions/PermittedActions'
import MyContext from '../../../context/MyContext'


const ResourceDetails = props => {

  return (
    <MyContext.Consumer>
      {context => (
        <div className="main-resource-item-layout">
          <div className="resource-item-layout">
            <h3 className="resource-item-header">
              <label className="resource-text-header">{context.currentResource && context.currentResource.name}</label>
            </h3>
            <div className="flex-row">
              <div className="general-details-content">
                <GeneralDetails title={'GENERAL DETAILS'} />
              </div>
              <div className="permitted-actions-content">
                <PermittedActions actionsArray={props.actionsArray} title={'PERMITTED ACTIONS'} />
              </div>
            </div>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default ResourceDetails