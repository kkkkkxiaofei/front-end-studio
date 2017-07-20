import React from 'react'
import 'isomorphic-fetch';

export default class Page extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            article: ''
        };
    }
    componentDidMount() {
        const data = this.props.data;
        fetch(data[0].src, {method: "GET"})
            .then((response) => {
                debugger
                return response.text();
            })
            .then(article => {
                console.log(article)
                this.setState({article})
            })
    }
    render() {
        const {type, data} = this.props;
        return (
            <div className={type}>
                <div className="left-menu">
                    <div className="mask"></div>
                    <div className="menu"></div>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.article}}></div>
            </div>
        )
    }
}