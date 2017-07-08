import React from 'react'
import {Link}  from 'react-router'

export default class App extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div>
                <h1>React&Redux Demo</h1>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
                {children}
            </div>
        )
    }
}