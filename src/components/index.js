import React, { Component } from 'react';

import Header from './Header';
import Body from './Body';

import './index.css';

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default Index;