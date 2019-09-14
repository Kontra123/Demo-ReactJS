import React from 'react';
import MyContext from './MyContext';

export default class MyProvider extends React.Component {

    render() {
        return (
            <MyContext.Provider
                value={{
                    currentResource: this.props.currentResource,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}