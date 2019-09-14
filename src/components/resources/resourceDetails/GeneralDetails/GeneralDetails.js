import React from 'react'
import "./GeneralDetails.css";
import ResourceItemTitle from "../Title/ResourceItemTitle"
import GeneralDetailsContent from "./GeneralDetailsContent/GeneralDetailsContent"
import MyContext from '../../../../context/MyContext'


const GeneralDetails = props => {

    return (
        <MyContext.Consumer>
            {context => (
                context.currentResource && <div className="general-details-layout">
                    <ResourceItemTitle title={props.title} />
                    <GeneralDetailsContent title={'NAME'} value={context.currentResource.name} />
                    <GeneralDetailsContent title={'DESCRIPTION'} value={context.currentResource.description} />
                    <GeneralDetailsContent title={'RESOURCE TYPE'} value={context.currentResource.resourceType} />
                    <GeneralDetailsContent title={'PATH'} value={context.currentResource.path} />
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default GeneralDetails