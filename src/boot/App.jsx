import React from 'react';
import { Provider } from 'react-redux';
import store from './reducer';

class App extends React.Component {
    render() {
        //var path = this.props.location.pathname;
   
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default App;