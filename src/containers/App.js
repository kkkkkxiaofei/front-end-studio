import React from 'react'
import {Link}  from 'react-router'

export default class App extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div className="app">
                <div className="nav">
                    <p className="title">Front End Studio</p>
                    <ul className="link-group">
                        <li><Link to="/popular-framework">Popular Framework</Link></li>
                        <li><Link to="/webpack">Webpack</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/javascript">Javascript</Link></li>
                        <li><Link to="/docker">Docker/CI</Link></li>
                    </ul>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        )
    }
}