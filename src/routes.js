import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Page from './containers/pages/Page';

const wrapperedPage = (type, data, Component) => {
    return props => <Component {...{type, data, props}} />
}

const pages = [
    {
        type: 'popular-framework',
        data: {},
        component: Page
    }
];

export default (
    <Route path="/" component={App}>
        {
            pages.map(({type, data, component}, index) => <Route path={`/${type}`} component={wrapperedPage(type, data, component)} />)
        }
    </Route>
)