import React from 'react'
import {Link}  from 'react-router'

export default class App extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div className="app">
                <div className="nav">
                    <h1 className="title">Front End Studio</h1>
                    <ul>
                        <li><Link to="/blog">React&Redux</Link></li>
                    </ul>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        )
    }
}