import React from 'react';
import 'isomorphic-fetch';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link}  from 'react-router';

@connect(state => ({article: state.article}))
export default class Page extends React.Component {
    state = {
        article: ''
    }
    getArticles() {
        const {type, article = {}} = this.props;
        return article[type] || [];
    }
    hightBlocks() {
        document.querySelectorAll('pre code').forEach(elem => hljs.highlightBlock(elem))
    }
    fetchArticle(url) {
        if (url) {
            fetch(url, {method: "GET"})
            .then((response) => {
                return response.text();
            })
            .then(article => {
                this.setState({article}, this.hightBlocks);
            })
        }
    }
    getArticle(articleId) {
        const articles = this.getArticles();
        const url = _.get(_.find(articles, ({id}) => id === articleId), 'url');
        this.fetchArticle(url);
    }
    componentWillReceiveProps(nextProps) {
        const {props: {params: {articleId}}, type, article} = nextProps;
        const articles = article[type];
        let url = _.get(_.find(articles, ({id}) => id === articleId), 'url');
        url = url || _.get(articles, '[0].url');
        this.fetchArticle(url);
    }
    componentWillMount() {
        const articles = this.getArticles();
        const url = _.get(articles, '[0].url');
        this.fetchArticle(url)
    }
    render() {
        console.log('render');
        const {type} = this.props;
        return (
            <div className={type}>
                <div className="left-menu">
                    <div className="mask"></div>
                    <ul className="menu">
                        {
                            this.getArticles().map(({title, id}, index) => <li key={index}><Link to={`/${type}/${id}`}>{title}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.article}}></div>
            </div>
        )
    }
}
