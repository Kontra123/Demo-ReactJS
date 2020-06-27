import fetchService from "./fetch";
import resourcesMockData from '../files/data.json'

class Services {

    getResources = async () => {
        const resources = await fetchService.get('cgoeXIpMWG?indent=2');
        if(resources && resources.length > 0) {
            return resources;
        }
        else {
            return resourcesMockData.resources;
        }
    }

    getActions = async () => {
        const actions = await fetchService.get('ceeeljYHNe?indent=2');
        if(actions && actions.length > 0) {
            return actions;
        }
        else {
            return  resourcesMockData.actions;
        }
    }

}

const services = new Services();
export default services;