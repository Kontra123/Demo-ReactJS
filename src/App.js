import React from 'react';
import './app.scss';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import MainView from './views/mainView/MainView.view';

const App = () => {

    return (
        // <Router>
        //     <Switch>
        //         <Redirect from="/" exact to="/main"/>
        //         <Route path="/main" component={MainView} />
        //     </Switch>
        // </Router>
        <div>
            test
        </div>
    );

}

export default App;
