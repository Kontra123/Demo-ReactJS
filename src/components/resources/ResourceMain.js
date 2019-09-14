import React from 'react'
import "./ResourceMain.css";
import ResourceItem from './resourceItem/ResourceItem'
import MyContext from '../../context/MyContext'

const ResourceMain = props => {

    let resourcesViews = props.resources.map(resource =>
        <MyContext.Consumer>
            {context => (
                <ResourceItem key={resource.id} resource={resource} 
                isSelected={resource.id === context.currentResource.id} resourceClick={props.resourceClick} />
            )}
        </MyContext.Consumer>
    )

    return (
        <div className="main-resource-layout">
            <label className="items-title">Items</label>
            {resourcesViews}
        </div>
    )
}

export default ResourceMain