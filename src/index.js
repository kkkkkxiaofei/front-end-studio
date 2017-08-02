import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './styles/index.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const MOUNT_NODE = document.getElementById('root');
let render = () => {
    ReactDOM.render(
        <Root store={store} history={history} />,
        MOUNT_NODE
    );
};

// Development Tools
if (__DEV__) {
    if (module.hot) {
        //Setup hot module replacement
        module.hot.accept([
                './containers/App',
                './routes',
            ], () => {
                    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
                    render();
                }
        );
    }
}

// Start Render
render();


