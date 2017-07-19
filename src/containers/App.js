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
                        <li><Link to="/blog">Webpack</Link></li>
                        <li><Link to="/blog">CSS</Link></li>
                        <li><Link to="/blog">Javascript</Link></li>
                        <li><Link to="/blog">Docker/CI</Link></li>
                    </ul>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        )
    }
}