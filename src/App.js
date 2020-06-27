import React, { useEffect, useReducer } from 'react';
import './app.scss';
import ResourceDetails from './components/resources/resourceDetails/ResourceDetails'
import ResourceMain from './components/resources/ResourceMain.js';
import { initResourcesMap } from './services/utils'
import MyProvider from './context/MyProvider'
import services from './services/services';


const App = () => {

    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { currentResource: null, resources: null, actionsArray: null, resourcesMap: null }
    )

    const handleResourceClick = (resource) => {
        setState({ currentResource: resource, actionsArray: state.resourcesMap.get(resource.id) })
    }

    useEffect(() => {
        const getResources = async () => {
            const [resources, actions] = await Promise.all([
                services.getResources(),  services.getActions()
            ])

            //will create map between resourceId and his actions
            const resourcesMap = initResourcesMap(resources, actions)

            setState({
                currentResource: resources[0], resources: resources,
                resourcesMap: resourcesMap, actionsArray: resourcesMap.get(resources[0].id)
            })

        };

        getResources();

    }, []);

    return (
        <div className="main">
            <h1 className="demo-header">Demo App</h1>
            <div className="demo-content">
                <MyProvider currentResource={state.currentResource}>
                    <ResourceMain resources={state.resources} resourceClick={handleResourceClick} />
                    <ResourceDetails actionsArray={state.actionsArray} />
                </MyProvider>
            </div>
        </div>

    );

}

export default App;
