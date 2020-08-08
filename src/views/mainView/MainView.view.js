import React, { useEffect, useState } from 'react';
import "./mainView.scss";
import ResourceMain from '../../components/resources/ResourceMain';
import ResourceDetails from '../../components/resources/resourceDetails/ResourceDetails'
import { initResourcesMap } from '../../services/utils'
import MyProvider from '../../context/MyProvider'
import services from '../../services/services';


const MainView = props => {

    const { history, location } = props;

    const [state, setState] = useState({
        currentResource: null,
        resources: null,
        actionsArray: null,
        resourcesMap: null
    })

    const handleResourceClick = (resource) => {
        history.replace(`/main?item=${resource.id}`);

        setState({
            ...state,
            currentResource: resource,
            actionsArray: state.resourcesMap.get(resource.id)
        })
    }

    useEffect(() => {
        const getResources = async () => {
            const [resources, actions] = await Promise.all([
                services.getResources(), services.getActions()
            ])

            //will create map between resourceId and his actions
            const resourcesMap = initResourcesMap(resources, actions)

            const params = new URLSearchParams(location.search);
            const item = params.get('item');
            let currentSource;
            if(item) {
                currentSource = resources[Number(item - 1)];
            }
            else {
                currentSource = resources[0];
                // history.replace(`/main?item=1`);
            }

            setState({
                ...state,
                currentResource: currentSource,
                resources: resources,
                resourcesMap: resourcesMap,
                actionsArray: resourcesMap.get(currentSource.id)
            })

        };

        getResources();

    }, []);

    return (
        <div className="main">
            <h1 className="demo-header">Demo App</h1>
            <div className="demo-content">
                <MyProvider currentResource={state.currentResource}>
                    <ResourceMain resources={state.resources}
                         resourceClick={handleResourceClick}/>
                    <ResourceDetails actionsArray={state.actionsArray} />
                </MyProvider>
            </div>
        </div>
    )
}

export default MainView