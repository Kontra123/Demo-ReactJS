import React from 'react'
import "./PermittedActions.css";
import ResourceItemTitle from "../Title/ResourceItemTitle"
import PermittedActionsContent from "./PermittedActionsContent/PermittedActionsContent"


const PermittedActions = props => {
    const {actionsArray} = props;

    const permittedActionsViews = actionsArray && actionsArray.map(action => 
    <PermittedActionsContent key={action.id} item={action.name}/>)

    return (
        <div className="permitted-actions-layout">
            <ResourceItemTitle title={props.title}/>
            <div className="permitted-actions-content-layout">
                {permittedActionsViews}
            </div>
        </div>    
    )
  }
  
  export default PermittedActions