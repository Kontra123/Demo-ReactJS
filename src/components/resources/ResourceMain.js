import React from 'react'
import "./resourceMain.scss";
import ResourceItem from './resourceItem/ResourceItem'
import MyContext from '../../context/MyContext'

const ResourceMain = props => {
    const {resources, resourceClick } = props
    
    let resourcesViews = resources && resources.map(resource =>
        <MyContext.Consumer key={resource.id}>
            {context => ( 
                <ResourceItem resource={resource} 
                isSelected={resource.id === context.currentResource.id} 
                resourceClick={() => resourceClick(resource)} />
            )}
        </MyContext.Consumer>
    )

    return (
        <div className="main-resource-layout">
            <label className="items-title">Items</label>
            <div className="resources-views">
                {resourcesViews}
            </div>
        </div>
    )
}

export default ResourceMain