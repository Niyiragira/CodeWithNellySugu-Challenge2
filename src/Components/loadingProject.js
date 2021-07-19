import React, { Component } from 'react';
import '../Assets/Styles/loading.scss';

export default class LoadingPage extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">Air-Album</div>
                <div className="loading">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
}
