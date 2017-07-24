import React from 'react';
import 'isomorphic-fetch';
import {connect} from 'react-redux';

@connect(state => ({article: state.article}))
export default class Page extends React.Component {
    state = {
        content: ''
    }
    hightBlocks() {
        document.querySelectorAll('pre code').forEach(elem => hljs.highlightBlock(elem))
    }
    getContent(nextProps, index = 0) {
        const {article = {}, type} = nextProps || this.props;
        const articles = article[type] || [];
        if (articles.length > 0) {
            fetch(articles[index].url, {method: "GET"})
            .then((response) => {
                return response.text();
            })
            .then(content => {
                this.setState({content}, this.hightBlocks);
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
                        <ul className="menu">
                            {
                                articles.map(({title}, index) => <li key={index} onClick={() => {this.getContent(null, index);}}>{title}</li>)
                            }
                        </ul>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </div>
            )
        }
        return null;
    }
}
