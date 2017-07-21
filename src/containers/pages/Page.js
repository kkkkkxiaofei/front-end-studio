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
    getContent(nextProps) {
        const {article = {}, type} = nextProps || this.props;
        const articles = article[type] || [];
        if (articles.length > 0) {
            fetch(articles[0].url, {method: "GET"})
                .then((response) => {
                    return response.text();
                })
                .then(content => {
                    console.log(content)
                    this.setState({content})
                })
        }
    }
    componentWillReceiveProps(nextProps) {
        this.getContent(nextProps);
    }
    componentDidMount() {
        this.getContent();
    }
    render() {
        const {type, article ={}} = this.props;
        const articles = article[type] || [];
        if (articles.length > 0) {
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
        return null;
    }
}

export default connect(state => ({article: state.article}))(Page)