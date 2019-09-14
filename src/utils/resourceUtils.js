export const initResourcesMap = (resources, actions) => {
    let resourcesMap = new Map();

    resources.forEach(item => {
      let actionsArrayTemp = []
      item.actionIds.forEach(item => {
  
        const tempAction = actions.find(action => item === action.id)
        if (tempAction) {
          actionsArrayTemp.push(tempAction);
        }
      });
  
      resourcesMap.set(item.id, actionsArrayTemp);
    })

    return resourcesMap;
  
}