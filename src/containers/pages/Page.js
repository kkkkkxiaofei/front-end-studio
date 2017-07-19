import React from 'react'

export default class Page extends React.Component {
    render() {
        const {type, data: {menu, content}} = this.props;
        return (
            <div className={type}>
                <div className="left-menu">
                    <div className="mask"></div>
                    <div className="menu">{menu}</div>
                </div>
                <div className="content">{content}</div>
            </div>
        )
    }
}