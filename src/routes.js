import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Page from './containers/pages/Page';

const wrapperedPage = (type, Component) => {
    return props => <Component {...{type, props}} />
}

const pages = [
    {
        type: 'popular-framework',
        component: Page
    },
    {
        type: 'webpack',
        component: Page
    },
    {
        type: 'css',
        component: Page
    },
    {
        type: 'ecmascript',
        component: Page
    },
    {
        type: 'docker',
        component: Page
    }
];

export default (
    <Route path="/" component={App}>
        {
            pages.map(
                ({type, data, component}, index) =>
                <Route key={index} path={`/${type}/:articleId`} component={wrapperedPage(type, component)} />)
        }
    </Route>
)