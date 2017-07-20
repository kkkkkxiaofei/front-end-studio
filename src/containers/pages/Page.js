import React from 'react';
import 'isomorphic-fetch';
import {connect} from 'react-redux';

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: {}
        };
    }
    componentDidMount() {
        const {article, type} = this.props;
        const articles = article[type];
        fetch(articles[0].url, {method: "GET"})
            .then((response) => {
                return response.text();
            })
            .then(content => {
                console.log(content)
                this.setState({content})
            })
    }
    render() {
        const {type, article} = this.props;
        const articles = article[type];
        return (
            <div className={type}>
                <div className="left-menu">
                    <div className="mask"></div>
                    <div className="menu">{articles[0].title}</div>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </div>
        )
    }
}

export default connect(state => ({article: state.article}))(Page)