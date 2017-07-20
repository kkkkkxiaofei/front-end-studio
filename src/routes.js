import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Page from './containers/pages/Page';
import md from '../md.json';

const wrapperedPage = (type, data, Component) => {
    return props => <Component {...{type, data, props}} />
}

const pages = [
    {
        type: 'popular-framework',
        data: md['popular-framework'],
        component: Page
    },
    {
        type: 'webpack',
        data: md['popular-framework'],
        component: Page
    },
    {
        type: 'css',
        data: md['popular-framework'],
        component: Page
    },
    {
        type: 'javascript',
        data: md['popular-framework'],
        component: Page
    },
    {
        type: 'docker',
        data: md['popular-framework'],
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