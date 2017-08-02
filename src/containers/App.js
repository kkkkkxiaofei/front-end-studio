import React from 'react';
import {Link}  from 'react-router';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticle} from '../actions/article';

const links = [
    {
        path: '/ecmascript',
        title: 'ECMAScript'
    },
    {
        path: '/css',
        title: 'HTML/CSS'
    },
    {
        path: '/deploy',
        title: 'Deploy'
    },
    {
        path: '/others',
        title: 'Others'
    },
    {
        path: '/thinking',
        title: 'Thinking'
    }
];

class App extends React.Component {
    componentDidMount() {
        this.props.actions.fetchArticle();
    }
    render() {
        const {children, location: {pathname}} = this.props;
        return (
            <div className="app">
                <div className="nav">
                    <p className="title">Front End Studio</p>
                    <ul className="link-group">
                        {
                            links.map(
                                ({path, title}, index) =>
                                <li key={index}><Link className={classNames({actived: pathname === path})} to={`${path}/index`}>{title}</Link></li>
                            )
                        }
                    </ul>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators({fetchArticle}, dispatch)
    }
);

export default connect(null, mapDispatchToProps)(App);