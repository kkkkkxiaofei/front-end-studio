import React from 'react';
import {Link}  from 'react-router';
import classNames from 'classnames';

const links = [
    {
        path: '/popular-framework',
        title: 'Popular Framework'
    },
    {
        path: '/webpack',
        title: 'Webpack'
    },
    {
        path: '/css',
        title: 'CSS'
    },
    {
        path: '/javascript',
        title: 'Javascript'
    },
    {
        path: '/docker',
        title: 'Docker/CI'
    }
];

export default class App extends React.Component {
    render() {
        const {children, location: {pathname}} = this.props
        return (
            <div className="app">
                <div className="nav">
                    <p className="title">Front End Studio</p>
                    <ul className="link-group">
                        {
                            links.map(
                                ({path, title}, index) =>
                                <li><Link className={classNames({actived: pathname === path})} to={path}>{title}</Link></li>
                            )
                        }
                    </ul>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        )
    }
}