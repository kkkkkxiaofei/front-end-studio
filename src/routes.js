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
        data: {
            menu: 'popular-framework menu',
            content: 'popular-framework content'
        },
        component: Page
    },
    {
        type: 'webpack',
        data: {
            menu: 'webpack menu',
            content: 'webpack content'
        },
        component: Page
    },
    {
        type: 'css',
        data: {
            menu: 'css menu',
            content: 'css content'
        },
        component: Page
    },
    {
        type: 'javascript',
        data: {
            menu: 'javascript menu',
            content: 'javascript content'
        },
        component: Page
    },
    {
        type: 'docker',
        data: {
            menu: 'docker menu',
            content: 'docker content'
        },
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