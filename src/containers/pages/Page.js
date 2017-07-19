import React from 'react'

export default class Page extends React.Component {
    render() {
        const {type} = this.props;
        debugger
        return (
            <div className={type}>
                <div className="left-menu">
                    <div className="mask"></div>
                    <div className="menu">
                        framework-page
                    </div>
                </div>
                <div className="content">framework-page</div>
            </div>
        )
    }
}