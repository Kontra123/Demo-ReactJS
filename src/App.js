import React, { useEffect, useReducer } from 'react';
import './app.scss';
import ResourceDetails from './components/resources/resourceDetails/ResourceDetails'
import ResourceMain from './components/resources/ResourceMain.js';
import { initResourcesMap } from './utils/resourceUtils'
import MyProvider from './context/MyProvider'
import resourcesMockData from './files/data.json'


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
            const jsonFile = await resourcesMockData

            //will create map between resourceId and his actions
            const resourcesMap = initResourcesMap(jsonFile.resources, jsonFile.actions)

            setState({
                currentResource: jsonFile.resources[0], resources: jsonFile.resources,
                resourcesMap: resourcesMap, actionsArray: resourcesMap.get(jsonFile.resources[0].id)
            })

        };

        getResources();

    }, []);

    return (
        <div className="main">
            <h1 className="demo-header">Demo App</h1>
            <div className="flex-row">
                <MyProvider currentResource={state.currentResource}>
                    <ResourceMain resources={state.resources} resourceClick={handleResourceClick} />
                    <ResourceDetails actionsArray={state.actionsArray} />
                </MyProvider>
            </div>
        </div>

    );

}

export default App;
