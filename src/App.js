import React, { useState } from 'react';
import { resources, actions } from './files/data.json'
import './App.css';
import ResourceDetails from './components/resources/resourceDetails/ResourceDetails'
import ResourceMain from './components/resources/ResourceMain.js';
import {initResourcesMap} from './utils/resourceUtils'
import MyProvider from './context/MyProvider'

let resourcesMap = initResourcesMap(resources, actions);

const App = () => {
  const [currentResource, setCurrentResource] = useState(resources[0])
  const [actionsArray, setActionsArray] = useState(resourcesMap.get(currentResource.id))

  const handleResourceClick = (resource) => {
    setCurrentResource(resource);
    setActionsArray(resourcesMap.get(currentResource.id))
  }

  return (
      <div className="container">
        <h1 className="demo-header">Demo App</h1>
        <div className="flex-row">
        <MyProvider currentResource={currentResource}>
            <ResourceMain resources={resources} resourceClick={handleResourceClick} />
            <ResourceDetails actionsArray={actionsArray} />
        </MyProvider>
        </div>
      </div>
  );

}

export default App;
