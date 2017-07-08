import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Blog from './containers/Blog'

export default (
    <Route path="/" component={App}>
        <Route path="/blog" component={Blog} />
    </Route>
)