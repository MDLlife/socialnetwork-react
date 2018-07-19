import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';

import Future from './news/Future'; // render one future post
import Post from './news/Post'; // render one news post
import Divider from './Divider'; // to seperate post by date

class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            head: 1
        }
    }

    selectingHeads = event => {
        this.setState({
            head: event.target.value
        })
    };

    render() {
        return [
            <Col xs={8}>
                {
                    this.state.head === 1 ? <Post/> : <Future />
                }
            </Col>,
            <Col xs={2}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0
                }}>
                    <li
                        className={`list-item ${this.state.head === 1 ? 'selected-item' : null}`}
                        value="1"
                        onClick={this.selectingHeads}
                    >
                        News
                    </li>
                    <li
                        className={`list-item ${this.state.head === 2 ? 'selected-item' : null}`}
                        value="2"
                        onClick={this.selectingHeads}
                    >
                        Future
                    </li>
                </ul>
            </Col>
        ]
    }
}

export default connect()(NewsFeed);